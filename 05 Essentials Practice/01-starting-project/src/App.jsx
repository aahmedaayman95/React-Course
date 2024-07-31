import Results from "./components/Results";
import UserInput from "./components/UserInput";
import Header from "./components/Header";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  console.log("App Is Rendering");
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [annualInvestment, setAnnualInvestment] = useState(2000);
  const [expectedReturn, setExpectedReturn] = useState(3000);
  const [duration, setDuration] = useState(2);
  const [data, setData] = useState([]);
  console.log("Data from App");
  console.log(data);

  function updateDataApp({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    console.log("Update Data App is Called");
    console.log(initialInvestment);
    setData((oldData) => {
      let updatedData = [...oldData];
      console.log("This Is Updated Data");
      console.log(updatedData);
      let annualData = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
      });
      console.log("This Is Annual Data");
      console.log(annualData);
      updatedData = annualData;

      return updatedData;
    });
  }

  // let Hamada = [];
  // Hamada = calculateInvestmentResults({
  //   initialInvestment,
  //   annualInvestment,
  //   expectedReturn,
  //   duration,
  // });
  // console.log("Hi");
  // console.log(Hamada);

  function handleinitialInvestmentChangeApp(event) {
    console.log("Handle Change Inside App Is Called");
    setInitialInvestment(event.target.value);
    console.log("Es7aaaaaaaaaaa");
    console.log(event.target.value);
    console.log(annualInvestment);
    console.log(expectedReturn);
    console.log(duration);
    updateDataApp({
      initialInvestment: event.target.value,
      annualInvestment,
      expectedReturn,
      duration,
    });
  }
  function handleannualInvestmentChangeApp(event) {
    console.log("Handle Change Inside App Is Called");
    setAnnualInvestment(event.target.value);
    updateDataApp({
      initialInvestment,
      annualInvestment: event.target.value,
      expectedReturn,
      duration,
    });
  }
  function handleexpectedReturnChangeApp(event) {
    console.log("Handle Change Inside App Is Called");
    setExpectedReturn(event.target.value);
    updateDataApp({
      initialInvestment,
      annualInvestment,
      expectedReturn: event.target.value,
      duration,
    });
  }
  function handledurationChangeApp(event) {
    console.log("Handle Change Inside App Is Called");
    setDuration(event.target.value);
    updateDataApp({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration: event.target.value,
    });
  }
  return (
    <>
      <Header></Header>
      <UserInput
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
        handleinitialInvestmentChange={handleinitialInvestmentChangeApp}
        handleannualInvestmentChange={handleannualInvestmentChangeApp}
        handleexpectedReturnChange={handleexpectedReturnChangeApp}
        handledurationChange={handledurationChangeApp}
      ></UserInput>
      <Results data={data}></Results>
    </>
  );
}

export default App;
