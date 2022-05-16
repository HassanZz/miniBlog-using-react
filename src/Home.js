import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new website",
      body: "lorem ipsum....",
      author: "hassan",
      id: 1,
    },
    {
      title: "Welcome to my website",
      body: "lorem ipsum....",
      author: "eli",
      id: 2,
    },
  ]);
  const [name, setName] = useState("hassan");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button
        onClick={() => {
          setName("patrick");
        }}
      >
        Change name
      </button>
      <p>{name}</p>
      {/* <BlogList
      blogs={blogs.filter((item) => item.author === "hassan")}
      title="Hassan's blogs"/> */}
    </div>
  );
};

export default Home;
