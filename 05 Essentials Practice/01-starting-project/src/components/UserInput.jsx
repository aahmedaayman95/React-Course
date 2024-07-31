function UserInput({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  handleinitialInvestmentChange,
  handleannualInvestmentChange,
  handleexpectedReturnChange,
  handledurationChange,
}) {
  console.log("User Input Is Rendering");
  return (
    <div id="user-input">
      <div className="input-group">
        <label>Initial Investment</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={handleinitialInvestmentChange}
        ></input>
      </div>
      <div className="input-group">
        <label>Annual Investment</label>
        <input
          type="number"
          value={annualInvestment}
          onChange={handleannualInvestmentChange}
        ></input>
      </div>
      <div className="input-group">
        <label>Expected return</label>
        <input
          type="number"
          value={expectedReturn}
          onChange={handleexpectedReturnChange}
        ></input>
      </div>
      <div className="input-group">
        <label>Duration</label>
        <input
          type="number"
          value={duration}
          onChange={handledurationChange}
        ></input>
      </div>
    </div>
  );
}

export default UserInput;
