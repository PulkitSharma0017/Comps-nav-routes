import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell />
          Click Here!
        </Button>
      </div>
      <div>
        <Button secondary>Click Here!</Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Click Here!
        </Button>
      </div>
      <div>
        <Button warning rounded outlined>
          <GoCloud />
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
