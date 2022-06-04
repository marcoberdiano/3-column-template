import Card from "./Card";
import data from '../data/data.json'
function App() {
  return (
    <div className="app">
      <header></header>
      <main className="main-container">
        {data.map(card => <Card key={card.name} name={card.name} text={card.text} />)}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
