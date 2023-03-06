import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSong, deleteSong } from "../../redux/store/slice/song.slice";
export default function Song() {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.song.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSong());
  }, [dispatch]);

  return (
    <div>
      {song &&
        song.map((data, i) => (
          <div key={i}>
            <h1>-**********</h1>
            <h1>{data.title}</h1>
            <h2>{data.artist}</h2>
            <h3>{data.album}</h3>
            <h4>{data.genre}</h4>
            <h1>{data._id}</h1>
            <h1>_***********</h1>
            <button onClick={() => navigate(`/${data._id}`)}>Edit</button>
            <button onClick={() => dispatch(deleteSong({ id: data._id }))}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
