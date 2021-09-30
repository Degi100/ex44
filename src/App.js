import './App.scss';
import links from './data/links.json';

function App() {
  return (
    <div className="App">
      <h1>Links</h1>    
      <ul>
      {links.map((link, index)=> {
        return <li key={index}><a target="_blank" href={links.url} rel="noreferrer">{link.title}  </a></li>
      })}
      </ul>
    </div>

  );
}

export default App;
