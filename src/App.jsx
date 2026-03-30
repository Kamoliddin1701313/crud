import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </>
  );
}

export default App;

// http://localhost:3000/users
