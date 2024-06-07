import "./App.css";
import Provider from "./context/Provider";
import Routes from "./Routes/Routes";

export default function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}
