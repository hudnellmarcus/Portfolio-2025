import Layout from "./components/layout/Layout";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import SoundToggle from "./components/ui/SoundToggle";


function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Projects />
      </Layout>

      <SoundToggle  />
    </>
  );
}

export default App;
