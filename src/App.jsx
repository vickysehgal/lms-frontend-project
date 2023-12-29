import { Route, Routes } from "react-router-dom";

import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        {/* only "/" ka mtlb ha hamara homepage */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>

        {/* path="*" iss star ka mtlb hai jab v koi aisa path jo website me exist nhi krta ha tab mughe application
        <NotFound/> page pe redirect kr dega */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
