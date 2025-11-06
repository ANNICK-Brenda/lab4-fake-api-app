import { useState, useEffect } from "react";
import PostForm from "./Components//PostForm";
import PostsContainer from "./Components//PostsContainer";

export default function FakeApiApp() {
  // 1️ States
  const [data, setData] = useState([]); // all posts
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // 2️ Fetch posts once on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setData(posts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 3️ Handlers for form
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.body) return;

    const fake = {
      id: Date.now(),
      title: newPost.title,
      body: newPost.body,
    };

    // Add new post on top
    setData([fake, ...data]);
    setNewPost({ title: "", body: "" });
  };

  // 4️ Display
  return (
    <div className="app">
      <h1>Fake API App</h1>

      <PostForm
        newPost={newPost}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {loading ? <p>Loading...</p> : <PostsContainer posts={data} />}
    </div>
  );
}
