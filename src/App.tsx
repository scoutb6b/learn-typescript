import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import PostPage from "./components/PostPage";
import ContactPage from "./ContactPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
