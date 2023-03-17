import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getGenre, editSong } from "../../redux/store/slice/song.slice";
import { Label, Container, Input, Button, Head, Select } from "../index.styled";
export default function UpdateSong() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const isLoading = useSelector((state) => state.song.isLoading);
  const genre = useSelector((state) => state.song.genre);
  const songList = useSelector((state) => state.song.data);

  const [song, setSong] = useState({
    title: "",
    album: "",
    artist: "",
    genre: "",
  });
  const message = useSelector((state) => state.song.message);

  useEffect(() => {
    if (message !== "") navigator("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    dispatch(getGenre());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const songs = songList && songList.find((s) => s._id === id);
    if (songs) {
      setSong({
        title: songs.title,
        album: songs.album,
        artist: songs.artist,
        genre: songs.genre,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="ContainerLoader">
          <span className="loader"></span>
        </div>
      ) : (
        <Container>
          <Head> Update Song</Head>
          <Label htmlFor="title">title</Label>
          <br />
          <Input
            type="text"
            name="title"
            value={song.title}
            onChange={(e) => setSong({ ...song, title: e.target.value })}
            placeholder="Song Name"
            size="20"
            maxLength="20"
            required
          ></Input>
          <br />
          <Label htmlFor="artist">Artist</Label>
          <br />
          <Input
            type="text"
            name="artist"
            value={song.artist}
            onChange={(e) => setSong({ ...song, artist: e.target.value })}
            placeholder="Artist Name"
            size="20"
            maxLength="20"
            required
          ></Input>
          <br />
          <Label htmlFor="album">album</Label>
          <br />
          <Input
            type="text"
            name="album"
            value={song.album}
            onChange={(e) => setSong({ ...song, album: e.target.value })}
            placeholder="Album Name"
            size="20"
            maxLength="20"
            required
          ></Input>
          <br />
          <Label htmlFor="genre">Choose a Genre:</Label>
          <br />

          <Select
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
          </Select>
          <br />

          <Button
            type="button"
            onClick={() => {
              dispatch(editSong({ id: id, data: song }));
            }}
          >
            Update
          </Button>
        </Container>
      )}
    </>
  );
}
