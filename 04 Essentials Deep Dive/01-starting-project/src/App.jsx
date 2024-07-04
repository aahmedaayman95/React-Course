import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";
import CoreContepts from "./components/CoreConcepts.jsx";
import SectionWrapepr from "./components/SectionWrapper.jsx";

function App() {
  console.log("APP COMPONENT EXECUTING");

  return (
    <Fragment>
      <Header />
      <main>
        <CoreContepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
