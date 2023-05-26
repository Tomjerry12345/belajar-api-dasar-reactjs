import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c9aa0d0b822b48ca8d2be720021be5a3"
      )
      .then((res) => {
        console.log("res", res.data.articles[0].title);
        setData(res.data.articles);
      });
  }, []);

  return (
    <div className="App">
      {data.map((e) => (
        <h1>{e.title}</h1>
      ))}
    </div>
  );
}

export default App;
