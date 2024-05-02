import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [Data, setData] = useState([]);

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/sendData", {
          name,
        })
        .then((res) => {
          if (res.data == "fail") {
            alert("failed");
          } else {
            setData(res.data);
          }
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h1>Write Your Name</h1>

      <form onSubmit={submit}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
        />
        <input type="submit" />
      </form>
      {Data.map((e) => (
        <p>{e.name}</p>
      ))}
    </div>
  );
};

export default Home;
