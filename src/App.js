import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>
          Click Here!
        </Button>
      </div>
      <div>
        <Button secondary>Click Here!</Button>
      </div>
      <div>
        <Button success>Click Here!</Button>
      </div>
      <div>
        <Button warning rounded outlined>
          Click Here!
        </Button>
      </div>
      <div>
        <Button danger outlined>
          Click Here!
        </Button>
      </div>
    </div>
  );
}

export default App;
