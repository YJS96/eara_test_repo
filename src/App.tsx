import Router from './router/Router';
import './App.css'

function App() {
  const customVH = window.innerHeight;
  document.documentElement.style.setProperty("--vh", customVH + "px");
  window.addEventListener("resize", () => {
    document.documentElement.style.setProperty("--vh", customVH + "px");
  });

  return (
    <>
      <Router></Router>
    </>
  )
}

export default App
