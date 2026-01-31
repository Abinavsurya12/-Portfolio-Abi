import React from 'react';
import Background from './components/common/Background';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import UIUX from './components/sections/UIUX';
import Contact from './components/sections/Contact';

function App() {
  const [resumeFormat, setResumeFormat] = React.useState('ats'); // 'ats' or 'split'

  return (
    <>
      <CustomCursor />
      <Background />
      <Navbar resumeFormat={resumeFormat} setResumeFormat={setResumeFormat} />
      <main className="relative">
        <Hero resumeFormat={resumeFormat} />
        <About />
        <Projects />
        <Experience />
        <UIUX />
        <Contact />
      </main>

      <footer className="py-10 text-center text-slate-500 text-sm border-t border-white/5 relative glass-dark mt-20">
        <p>&copy; {new Date().getFullYear()} Abinav Surya. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
