import { Routes, Route } from "react-router-dom";
import CategoryMenu from "./components/category-menu/CategoryMenu";
import Authentication from "./components/sign-in/Authentication";
import Home from "./routes/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CategoryMenu />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
