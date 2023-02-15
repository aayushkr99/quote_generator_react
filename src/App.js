import React, { useState, useEffect } from "react";
import "./App.css";

const setRandomQuote = (quotes) => quotes[Math.floor(Math.random() * quotes.length)];

function App() {
  const [quotes , setQuotes] =  useState([])
  const [ quote , setQuote] = useState("")


  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((res) => {
        setQuotes(res)
        setQuote("")
      });
  }, []);

  const getRandomQuote = () => {
    setQuote(setRandomQuote(quotes))

  }

  return (
    <div className="App">
      <div className="container">
        <h1>Quote_Generator</h1>
        <div>
          <h2>{quote.text}</h2>
          <p>{quote.author !== null ?  quote.author : "anonomys"}</p>
          <button onClick={getRandomQuote}>new quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
