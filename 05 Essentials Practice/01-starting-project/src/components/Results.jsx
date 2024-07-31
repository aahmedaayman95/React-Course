function Results({ data }) {
  console.log("Result are rendering");
  console.log(data);
  if (data[0]) console.log(data[0].interest);
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
        {data.map((arr) => {
          return (
            <tr key={arr.year}>
              <td>{arr.year}</td>
              <td>{arr.interest}</td>
              <td>{arr.valueEndOfYear}</td>
              <td>{arr.annualInvestment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
