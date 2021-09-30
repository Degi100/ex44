import React, { useState, useEffect } from "react";
import feed from "./data/feeds.json"
import "./App.scss";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    feed.forEach(feed => {
    (async () => {
      const response = await fetch(feed.linksUrl);
      const tempLinks = await response.json();
      tempLinks.forEach(tempLink => tempLink.origin = feed.name);
      setLinks(n => [...n, ...tempLinks]);
     })();
    })
  }, []);

  return (
    <div className="App">
      <h1>Links</h1>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a target="_blank" href={link.url} rel="noreferrer">
                {link.title} (from {link.origin})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
