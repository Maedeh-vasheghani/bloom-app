import "./assets/styles/globales.css"
import Card from "./components/AddCard";
import Cardcontainer from "./components/CardContainer";

function App() {
  return (
    <div className="App flex flex-col lg:flex-row gap-3.5 overflow-x">
      <Cardcontainer />
      <Cardcontainer />
      <Cardcontainer />
      <Cardcontainer />
      <Cardcontainer />
    </div>
  );
}

export default App;
