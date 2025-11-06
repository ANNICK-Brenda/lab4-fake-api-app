export default function PostForm({ newPost, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>Post Form</h2>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={newPost.title}
        onChange={handleChange}
      />
      <br />
      <label>Body:</label>
      <input
        type="text"
        name="body"
        value={newPost.body}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
