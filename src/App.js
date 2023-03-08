import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditSong from "./components/editSong/editSong";
import AddSong from "./components/addSong/addSong";
import Navbar from "./components/navbar/navar";
import Song from "./components/getSong/getSong";
import Statics from "./components/getStatics/getStatics";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMessage, setError } from "./redux/store/slice/song.slice";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const message = useSelector((state) => state.song.message);
  const error = useSelector((state) => state.song.error);
  const dispatch = useDispatch();
  useEffect(() => {
    if (message !== "") toast.success(message);
    dispatch(setMessage(""));
  }, [message]);

  useEffect(() => {
    if (error !== "") toast.error(error);
    dispatch(setError(""));
  }, [error]);

  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Song />} />
        <Route path="/add" element={<AddSong />} />
        <Route path="/statics" element={<Statics />} />
        <Route path="/:id" element={<EditSong />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404</h1>
            </div>
          }
        />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
