import GifsGridItem from "./GifsGridItem";

import { useFetchGifs } from "../Hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__bounceIn animate__delay-3s	">Loading...</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GifsGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
