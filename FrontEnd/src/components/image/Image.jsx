import Button from '../button/Button';

import './Image.module.css';

export default function Image({ image, deleteStateSet, setImage }) {
  return (
    <>
      <div className="item">
        <a href={image.photo} target="_blank">
          <img src={image.photo} alt="" className="image" />
        </a>

        <div
          className="item-button"
          onClick={() => {
            console.log(123);
            deleteStateSet(true);
          }}
        >
          <div onClick={() => setImage(image)}>
            <Button type="outlined" color="rgb(235, 87, 87)" text="delete" />
          </div>
        </div>
        <div className="label">{image.label}</div>
      </div>
    </>
  );
}
