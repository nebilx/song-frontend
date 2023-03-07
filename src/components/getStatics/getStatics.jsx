import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatics } from "../../redux/store/slice/song.slice";

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
    <div>
      <h1>no Song album</h1>
      {statics?.data &&
        statics?.data.noSongAlbum.map((data, i) => (
          <div key={i}>
            <h1> {data.album}</h1>
            <h1>{data.totalSongs}</h1>
          </div>
        ))}
    </div>
  );
}
