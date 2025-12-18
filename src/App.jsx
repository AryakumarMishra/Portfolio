import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Background from './components/Background';
import SmoothScroll from './components/SmoothScroll';
import Grain from './components/Grain';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <Grain />
        <Background />
        <Layout>
          <Home />
          <About />
          <Projects />
          <Contact />
        </Layout>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
