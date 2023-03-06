import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGenre, addSong } from "../../redux/store/slice/song.slice";
export default function AddSong() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const genre = useSelector((state) => state.song.genre);
  const message = useSelector((state) => state.song.message);

  const [song, setSong] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
  });

  if (message) console.log(message.data.message);

  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  return (
    <div>
      <h1> Add Song</h1>
      <label htmlFor="title">title</label>
      <br />
      <input
        type="text"
        name="title"
        onChange={(e) => setSong({ ...song, title: e.target.value })}
        placeholder="Song Name"
      ></input>
      <br />
      <label htmlFor="artist">Artist</label>
      <br />
      <input
        type="text"
        name="artist"
        onChange={(e) => setSong({ ...song, artist: e.target.value })}
        placeholder="Artist Name"
      ></input>
      <br />
      <label htmlFor="album">album</label>
      <br />
      <input
        type="text"
        name="album"
        onChange={(e) => setSong({ ...song, album: e.target.value })}
        placeholder="Album Name"
      ></input>
      <br />
      <br />
      <label htmlFor="genre">Choose a Genre:</label>
      <br />

      <select
        onChange={(e) =>
          setSong({ ...song, genre: e.target.selectedOptions[0].value })
        }
      >
        <option disabled selected>
          Select Genre
        </option>
        {genre.data &&
          genre.data.map((data, i) => (
            <option value={data} key={i}>
              {data}
            </option>
          ))}
      </select>
      <br />

      <button
        type="button"
        onClick={() => {
          dispatch(addSong({ data: song }));
        }}
      >
        Add
      </button>
    </div>
  );
}
