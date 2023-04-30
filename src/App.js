import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const arr = [
    "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. - Martin Luther King Jr.",
    "Float like a butterfly, sting like a bee. - Muhammad Ali",
    "Ask not what your country can do for you, ask what you can do for your country. - John F. Kennedy",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.- Winston Churchill",
    "I am the greatest, I said that even before I knew I was. - Muhammad Ali",
    "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr",
    "The only way to do great work is to love what you do. - Steve Jobs",

    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",

    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",

    "It does not matter how slowly you go as long as you do not stop. - Confucius"
  ];
  const [data, setData] = useState();
  function handleclick() {
    const Randomindex = Math.floor(Math.random() * arr.length);
    setData(arr[Randomindex]);
  }
  return (
    <div className="card">
      <h1>Random quiz generator</h1>
      <h4>{data}</h4>
      <button onClick={handleclick}>generate quotes</button>
    </div>
  );
}
