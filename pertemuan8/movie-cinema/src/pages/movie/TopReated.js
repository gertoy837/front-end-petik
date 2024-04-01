import React from "react";
import { useEffect, useState } from "react";
import { getTopMovie } from "../../api";
import TopRated from "../../components/Movie/TopRated";

const TopReated = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getTopMovie().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TopReated</h1>
      <div className="movie-container">
        {datas.map((data) => {
          return (
            <TopRated
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
              average={data.vote_average}
              count={data.vote_count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopReated;
