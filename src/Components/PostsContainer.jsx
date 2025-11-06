import PostCard from "./Components//PostCard";

export default function PostsContainer({ posts }) {
  return (
    <div className="posts-container">
      {posts.map((p) => (
        <PostCard key={p.id} title={p.title} body={p.body} />
      ))}
    </div>
  );
}
