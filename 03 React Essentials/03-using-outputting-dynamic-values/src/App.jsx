//React hooks always start with Use and only used inside react components
//useState() should b e called inside componenet fns and on the top level .
//useState() shouldn't be called inside other fn or inside if statements.

import { Component, useState } from "react";
import reactImage from "./assets/react-core-concepts.png";
import reactImage2 from "./assets/config.png";
import reactImage3 from "./assets/jsx-ui.png";
import reactImage4 from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header.jsx";
import Core from "./components/Core.jsx";
import TabButton from "./components/TabButton.jsx";
``;
function App() {
  console.log("App Component is rendered");
  const [val, setVal] = useState();
  console.log(val);
  // we use the state to tell react to render a component again when a change happens to any state!
  function handleSelect(selectedButton) {
    console.log("Button is Clicked");
    console.log(selectedButton);
    setVal(selectedButton);
    //The val will be updated after APP is rendered (Executed again)
    console.log(val);
  }

  let tabContent = <p>Please Select A Topic</p>;

  if (val) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[val]["title"]}</h3>
        <p>{EXAMPLES[val]["description"]}</p>
        <pre>
          <code>{EXAMPLES[val]["code"]}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => {
              return <Core key={conceptItem.title} {...conceptItem} />;
            })}
          </ul>
        </section>
        <section>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={val === "components"}
              onSelect={() => handleSelect("components")}
            >
              components
            </TabButton>
            <TabButton
              isSelected={val === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              jsx
            </TabButton>
            <TabButton
              isSelected={val === "props"}
              onSelect={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelected={val === "state"}
              onSelect={() => handleSelect("state")}
            >
              state
            </TabButton>
          </menu>
          {val ? (
            <div id="tab-content">
              <h3>{EXAMPLES[val]["title"]}</h3>
              <p>{EXAMPLES[val]["description"]}</p>
              <pre>
                <code>{EXAMPLES[val]["code"]}</code>
              </pre>
            </div>
          ) : (
            <p>Please Select A Topic</p>
          )}
          <br></br>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
