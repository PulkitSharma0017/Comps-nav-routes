const { createContext } = require("react");

const NavigationContext = createContext();

// equivalent to Provider in books app
function NavigationProvider({ children }) {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
