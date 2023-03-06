import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getGenre, editSong } from "../../redux/store/slice/song.slice";

export default function UpdateSong() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const genre = useSelector((state) => state.song.genre);
  const songList = useSelector((state) => state.song.data);
  const [song, setSong] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
  });

  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  useEffect(() => {
    const songs = songList.data && songList.data.find((s) => s._id == id);
    if (songs) {
      setSong({
        title: songs.title,
        album: songs.album,
        artist: songs.artist,
        genre: songs.genre,
      });
    }
  }, [songList]);

  return (
    <div>
      <h1> Update Song</h1>
      <label htmlFor="title">title</label>
      <br />
      <input
        type="text"
        name="title"
        value={song.title}
        onChange={(e) => setSong({ ...song, title: e.target.value })}
        placeholder="Song Name"
      ></input>
      <br />
      <label htmlFor="artist">Artist</label>
      <br />
      <input
        type="text"
        name="artist"
        value={song.artist}
        onChange={(e) => setSong({ ...song, artist: e.target.value })}
        placeholder="Artist Name"
      ></input>
      <br />
      <label htmlFor="album">album</label>
      <br />
      <input
        type="text"
        name="album"
        value={song.album}
        onChange={(e) => setSong({ ...song, album: e.target.value })}
        placeholder="Album Name"
      ></input>
      <br />
      <label htmlFor="genre">Choose a Genre:</label>
      <br />

      <select
        onChange={(e) =>
          setSong({ ...song, genre: e.target.selectedOptions[0].value })
        }
      >
        <option disabled hidden>
          Select Genre
        </option>
        {genre.data &&
          genre.data.map((data, i) => (
            <option selected={data === song.genre} value={data} key={i}>
              {data}
            </option>
          ))}
      </select>
      <br />

      <button
        type="button"
        onClick={() => {
          dispatch(editSong({ id: id, data: song }));
        }}
      >
        Update
      </button>
    </div>
  );
}
