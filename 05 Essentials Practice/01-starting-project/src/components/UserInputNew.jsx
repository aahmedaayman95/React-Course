function UserInputNew({ input, handleChangeValue }) {
  console.log("User Input Is Rendering");
  return (
    <div id="user-input">
      <div className="input-group">
        <label>Initial Investment</label>
        <input
          type="number"
          value={input.initialInvestment}
          onChange={(event) =>
            handleChangeValue("initialInvestment", +event.target.value)
          }
        ></input>
      </div>
      <div className="input-group">
        <label>Annual Investment</label>
        <input
          type="number"
          value={input.annualInvestment}
          onChange={(event) =>
            handleChangeValue("annualInvestment", +event.target.value)
          }
        ></input>
      </div>
      <div className="input-group">
        <label>Expected return</label>
        <input
          type="number"
          value={input.expectedReturn}
          onChange={(event) =>
            handleChangeValue("expectedReturn", +event.target.value)
          }
        ></input>
      </div>
      <div className="input-group">
        <label>Duration</label>
        <input
          type="number"
          value={input.duration}
          onChange={(event) =>
            handleChangeValue("duration", +event.target.value)
          }
        ></input>
      </div>
    </div>
  );
}

export default UserInputNew;
