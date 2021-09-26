import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import People from "./components/People/People";

function App() {
  return (
    <div className="App">
      <Header />
      <People></People>
      <Footer/>
    </div>
  );
}

export default App;
