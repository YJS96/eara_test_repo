import Router from "./router/Router";
import "./App.css";

function App() {
  function preventDefault(e: any) {
    e.preventDefault();
  }
  // @ts-ignore
  function disableScroll() {
    document.body.addEventListener("touchmove", preventDefault, {
      passive: false,
    });
  }
  // @ts-ignore
  function enableScroll() {
    document.body.removeEventListener("touchmove", preventDefault);
  }
  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
