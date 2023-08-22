import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("Click !!!");
  };

  return (
    <div>
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Click Here!
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          Click Here!
        </Button>
      </div>
      <div>
        <Button success onMouseLeave={handleClick}>
          <GoDatabase />
          Click Here!
        </Button>
      </div>
      <div>
        <Button
          warning
          rounded
          className="mb-5"
          outlined
          onMouseEnter={handleClick}
        >
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
