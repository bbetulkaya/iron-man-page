import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Menu from "./Components/Menu/Menu";
import "./index.css";

function App() {
  return (
    <>
      <Menu />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
