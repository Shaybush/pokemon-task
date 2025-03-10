import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={""} />
        </Routes>
        <Layout />
      </BrowserRouter>
    </div>
  );
};

export default App;
