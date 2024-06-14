import reactImage from "./assets/react-core-concepts.png";
import reactImage2 from "./assets/config.png";
import reactImage3 from "./assets/jsx-ui.png";
import reactImage4 from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import Core from "./components/Core.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((e) => {
              return <Core {...e} />;
            })}
          </ul>
        </section>
        <section>
          <h2>Examples</h2>
          <menu>
            <TabButton>First Button</TabButton>
            <TabButton>Second Button</TabButton>
            <TabButton>Third Button</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
