// function App() {
//   return <div className="App">React App</div>;
// }

import Login from "./Authentication/login";
import Signup from "./Authentication/signup";

// export default App;
function App() {
  return (
    <div className="App">
      <Login />
      {/* <Signup /> */}
    </div>
  );
}

export default App;
