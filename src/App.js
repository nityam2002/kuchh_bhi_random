import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import ComponentA from "./Containers/ComponentA.js";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <ComponentA />
    </div>
    </Provider>
  );
}

export default App;
