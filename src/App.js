import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditSong from "./components/editSong/editSong";
import AddSong from "./components/addSong/addSong";
import Navbar from "./components/navbar/navar";
import Song from "./components/getSong/getSong";
import Statics from "./components/getStatics/getStatics";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route index element={<Song />} />
        <Route path="/add" element={<AddSong />} />
        <Route path="/statics" element={<Statics />} />
        <Route path="/:id" element={<EditSong />} />
        <Route path="*" element={<h1>404</h1>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
