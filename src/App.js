import { Routes, Route } from "react-router-dom";
import CategoryMenu from "./components/category-menu/CategoryMenu";
import SignIn from "./components/sign-in/SignIn";
import Home from "./routes/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CategoryMenu />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
