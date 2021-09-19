import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Containers/About";
import Contact from "./Containers/Contact";
import Experience from "./Containers/Experience";
import Header from "./Containers/Header";
import Portfolio from "./Containers/Portfolio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
