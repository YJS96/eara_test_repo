import Router from "./router/Router";
import "./App.css";
import { disableBodyScroll } from "body-scroll-lock";
import { useEffect } from "react";

function App() {
  const body = document.querySelector("body") as HTMLElement;
  // const root = document.querySelector("root") as HTMLElement
  useEffect(() => {
    disableBodyScroll(body);
    // disableBodyScroll(root);
  }, []);

  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
