import Card from "./components/card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<div><Card /></div>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
