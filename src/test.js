import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Test = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new Website", body: "lorem ipsum...", auth: "yoshi", id: 1 },
    { title: "my web site", body: "lorem ipsum...", auth: "mario", id: 2 },
    { title: "Welcome Party", body: "lorem ipsum...", auth: "smith", id: 3 },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log("Hello UseEffect");
    console.log(name);
  }, [name]);
  return (
    <div className="test">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>Changed</button>
      <p>{name}</p>
    </div>
  );
};

export default Test;
