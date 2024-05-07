import Body from "./components/Body.js";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import "./App.css"

function App() {
  return (

    <Provider store={store}>
    <div>
    <Head />
    <Body />
    </div>
    </Provider>
  );
}

export default App;
