import { useEffect, useState } from "react";
import { CONFIG } from "../../../config";
import "./Gallery.scss";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(CONFIG.galleryConfig[0]);
  //   const [selectedImgSrc, setSelectedImgSrc] = useState(
  //     CONFIG.galleryConfig[0].url
  //   );

  useEffect(() => {
    console.log("poxvec");
  }, [selectedImg]);

  useEffect(() => {
    console.log("katarvec arajin ev miak angam");
  }, []);

  return (
    <div className="gallery">
      <aside className="gallery-aside">
        {CONFIG.galleryConfig.map(({ url, id }) => {
          return (
            <div
              className="gallery-aside-item"
              key={id}
              style={{
                border: selectedImg.id === id ? "solid 8px red" : "solid",
              }}
              onClick={() => {
                setSelectedImg({ id, url });
              }}
            >
              <img src={url} alt="dali-img" />
            </div>
          );
        })}
      </aside>
      <div className="gallery-main">
        <img src={selectedImg.url} alt="dali-main" />
      </div>
    </div>
  );
};

export default Gallery;
