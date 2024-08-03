import { calculateInvestmentResults, formatter } from "../util/investment";

function ResultsNew({ data }) {
  console.log("Result are rendering");
  console.log("data");
  console.log(data);
  const finalResult = calculateInvestmentResults(data);
  console.log("final result");
  console.log(finalResult);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest</th>
          <th>Value End Of Year</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {finalResult.map((arr) => {
          return (
            <tr key={arr.year}>
              <td>{arr.year}</td>
              <td>{arr.interest}</td>
              <td>{formatter.format(arr.valueEndOfYear)}</td>
              <td>{arr.annualInvestment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultsNew;
