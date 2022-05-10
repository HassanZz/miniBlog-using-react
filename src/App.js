import "./App.css";

function App() {
  const title = "Wellcome to this blog";
  const likes = 50;
  const link = "http://www.google.com";
  //  const person = { name: "hassan", age: 25 };
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}

        <p>
          {10}
          {" hello world"}
          {[1, 2, 43, 4, 56]}
        </p>
        <p>{Math.random() * 10}</p>
        <a href={link}> Google</a>
      </div>
    </div>
  );
}

export default App;
