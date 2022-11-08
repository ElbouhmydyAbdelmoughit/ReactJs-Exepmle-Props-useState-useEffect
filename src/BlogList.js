const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{title}</h1>
          <h2> {blog.title} </h2>
          <p>written by {blog.auth} </p>
          <button onClick={() => handleDelete(blog.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
