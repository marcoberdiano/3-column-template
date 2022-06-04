import Card from "./Card";
import data from '../data/data.json'
function App() {
  return (
    <div className="app">
      <header></header>
      <main className="main-container">
        {data.map(card => <Card key={card.name} name={card.name} text={card.text} />)}
      </main>
      <footer className="footer">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noopener">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/marcoberdiano" rel="noopener">Marco</a>.
      </footer>
    </div>
  );
}

export default App;
