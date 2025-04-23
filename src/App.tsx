import Layout from "./components/layout/Layout";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import SoundToggle from "./components/ui/SoundToggle";


function App() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
      </Layout>

      <SoundToggle soundFile="/ocean-waves.mp3" />
    </>
  );
}

export default App;
