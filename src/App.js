import { Routes, Route } from "react-router-dom";
import CategoryMenu from "./components/category-menu/CategoryMenu";
import Home from "./routes/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<CategoryMenu />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
