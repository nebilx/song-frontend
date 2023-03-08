import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGenre, addSong } from "../../redux/store/slice/song.slice";
import { Label, Container, Input, Button, Head, Select } from "../index.styled";
export default function AddSong() {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const genre = useSelector((state) => state.song.genre);
  const isLoading = useSelector((state) => state.song.isLoading);

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
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="ContainerLoader">
          <span className="loader"></span>
        </div>
      ) : (
        <Container>
          <Head> Add Song</Head>
          <Label htmlFor="title">Name</Label>
          <Input
            type="text"
            name="title"
            onChange={(e) => setSong({ ...song, title: e.target.value })}
            placeholder="Song Name"
          ></Input>
          <Label htmlFor="artist">Artist</Label>
          <Input
            type="text"
            name="artist"
            onChange={(e) => setSong({ ...song, artist: e.target.value })}
            placeholder="Artist Name"
          ></Input>
          <Label htmlFor="album">album</Label>
          <Input
            type="text"
            name="album"
            onChange={(e) => setSong({ ...song, album: e.target.value })}
            placeholder="Album Name"
          ></Input>
          <Label htmlFor="genre">Choose a Genre:</Label>
          <Select
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
          </Select>
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
      )}
    </>
  );
}
