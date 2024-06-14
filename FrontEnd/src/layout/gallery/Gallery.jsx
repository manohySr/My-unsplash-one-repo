import React from 'react';
import Image from '../../components/image/Image';

import './Gallery.module.css';

export default function Gallery({ deleteStateSet, data, setImage, search }) {
  if (data?.length > 0 && search.trim() !== '') {
    const searchedImage = data.filter(function (image) {
      return image.label
        .toUpperCase()
        .trim()
        .includes(search.toUpperCase().trim());
    });
    if (searchedImage !== '') {
      data = searchedImage;
    }
  }
  return (
    <>
      <div className="gallery-container">
        <div className="gallery">
          {data?.length > 0 ? (
            data.map((image, key) => {
              return (
                <React.Fragment key={key}>
                  <Image
                    deleteStateSet={deleteStateSet}
                    image={image}
                    setImage={setImage}
                  />
                </React.Fragment>
              );
            })
          ) : (
            <div className="gallery-nothing">Nothing</div>
          )}
        </div>
      </div>
    </>
  );
}
