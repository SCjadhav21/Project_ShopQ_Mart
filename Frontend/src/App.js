// function App() {
//   return <div className="App">React App</div>;
// }

const { default: AdminPage } = require("./Authentication/AdminPage");

// export default App;

function App() {
  return (
    <div>
      <AdminPage />
    </div>
  );
}
export default App;
