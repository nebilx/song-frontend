import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatics } from "../../redux/store/slice/song.slice";
import { RiAlbumFill, RiFolderMusicFill } from "react-icons/ri";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { GiSing } from "react-icons/gi";
import { Head } from "../index.styled";
import { Table, Container } from "../getSong/getSong.style";

export default function Statics() {
  const statics = useSelector((state) => state.song.statics);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatics());
  }, [dispatch]);

  //noSongAlbum
  //noSongAndAlbumArtist
  //noSongArtist
  //noSongGenre
  //noSongTotal

  return (
    <>
      <Head>Statics</Head>

      <h2>Total</h2>
      <Card>
        <h1>Song</h1>
        <span>
          <GiSing />
        </span>
        <h2>20</h2>
      </Card>
      <br />
      <Card>
        <h1>Album</h1>
        <span>
          <RiAlbumFill />
        </span>
        <h2>400</h2>
      </Card>
      <br />
      <Card>
        <h1>Artist</h1>
        <span>
          <BsFillPersonBadgeFill />
        </span>
        <h2>20</h2>
      </Card>
      <br />
      <Card>
        <h1>Genre</h1>
        <span>
          <RiFolderMusicFill />
        </span>
        <h2>70</h2>
      </Card>
      <br />

      <Container>
        <Head>Artist</Head>
        <Table>
          <tr>
            <th>No.</th>
            <th>Total Song</th>
            <th>Artist</th>
            <th>Total Album</th>
          </tr>

          {statics &&
            statics?.noSongArtist.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.title}</td>
                <td>{data.artist}</td>
                <td>{data.album}</td>
              </tr>
            ))}
        </Table>
      </Container>

      <Container>
        <Head>Album</Head>
        <Table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>

          {statics &&
            statics?.noSongAlbum.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.title}</td>
                <td>{data.artist}</td>
                <td>{data.album}</td>
              </tr>
            ))}
        </Table>
      </Container>

      <Container>
        <Head>Genre</Head>
        <Table>
          <tr>
            <th>No.</th>
            <th>Genre</th>
            <th>Total Song</th>
          </tr>

          {statics &&
            statics?.noSongGenre.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.title}</td>
                <td>{data.artist}</td>
              </tr>
            ))}
        </Table>
      </Container>

      {/* <div>
        <h1>no Song album</h1>
        {statics?.data &&
          statics?.data.noSongAlbum.map((data, i) => (
            <div key={i}>
              <h1> {data.album}</h1>
              <h1>{data.totalSongs}</h1>
            </div>
          ))}
      </div> */}
    </>
  );
}

const Card = styled.div`
  background-color: red;
  padding: 20px;
  border-radius: 20px;
  span {
    font-weight: bold;
    font-size: 25px;
    color: #ffffff;
  }
  h1 {
    font-weight: 700;
    font-size: 20px;
  }
  h2 {
    font-weight: 500;
    font-size: 15px;
  }
`;
