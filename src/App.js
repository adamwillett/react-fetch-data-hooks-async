import React from "react";
import { useState, useEffect } from "react";
import "normalize.css";
import "./fonts.css";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({ hits: [] });

  return (
    <div className="App">
      <h1>React Hooks: Fetching Data</h1>
      <h2>Using useState and useEffect asynchronously</h2>
      <p>Main body text.</p>

      {/* data list from Hacker news */}
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
