import ReactDOM from 'react-dom';
import "./style.scss";

const App = () => (
    <h1>
      My TypeScript React App!{" "}
      {new Date().toLocaleDateString()}
    </h1>
  );

ReactDOM.render(
  <App />,
  document.getElementById("root")
);