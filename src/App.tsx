import Router from './router/Router';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div id="root" style={{  height: windowHeight }}>
        <Router ></Router>
      </div>
    </>
  )
}

export default App
