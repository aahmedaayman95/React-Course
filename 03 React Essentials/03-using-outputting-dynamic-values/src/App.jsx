import reactImage from "./assets/react-core-concepts.png";
import reactImage2 from "./assets/config.png";
import reactImage3 from "./assets/jsx-ui.png";
import reactImage4 from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";

function Core({ ...props }) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description} </p>
    </li>
  );
}

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
      </main>
    </div>
  );
}

export default App;
