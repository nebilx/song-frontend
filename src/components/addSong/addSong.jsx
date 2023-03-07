import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGenre, addSong } from "../../redux/store/slice/song.slice";
import { Label, Container, Input, Button, Head } from "../index.styled";
export default function AddSong() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const genre = useSelector((state) => state.song.genre);

  const [song, setSong] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
  });

  const message = useSelector((state) => state.song.message);

  useEffect(() => {
    if (message !== "") navigator("/");
  }, [message]);

  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  return (
    <Container>
      <Head> Add Song</Head>
      <Label htmlFor="title">Name</Label>
      <br />
      <Input
        type="text"
        name="title"
        onChange={(e) => setSong({ ...song, title: e.target.value })}
        placeholder="Song Name"
      ></Input>
      <br />
      <Label htmlFor="artist">Artist</Label>
      <br />
      <Input
        type="text"
        name="artist"
        onChange={(e) => setSong({ ...song, artist: e.target.value })}
        placeholder="Artist Name"
      ></Input>
      <br />
      <Label htmlFor="album">album</Label>
      <br />
      <Input
        type="text"
        name="album"
        onChange={(e) => setSong({ ...song, album: e.target.value })}
        placeholder="Album Name"
      ></Input>
      <br />
      <Label htmlFor="genre">Choose a Genre:</Label>
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
      <br />

      <Button
        type="button"
        onClick={() => {
          dispatch(addSong({ data: song }));
        }}
      >
        Add
      </Button>
    </Container>
  );
}
