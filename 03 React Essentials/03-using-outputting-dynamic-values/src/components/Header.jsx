import reactImage from "../assets/react-core-concepts.png";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const reactDescriptions = ["Fundamental", "Crucial", "Core", "Ayman"];

export default function Header() {
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
