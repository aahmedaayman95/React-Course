import reactImage from "./assets/react-core-concepts.png";
import reactImage2 from "./assets/config.png";
import reactImage3 from "./assets/jsx-ui.png";
import reactImage4 from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core", "Ayman"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(3)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(3)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

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
