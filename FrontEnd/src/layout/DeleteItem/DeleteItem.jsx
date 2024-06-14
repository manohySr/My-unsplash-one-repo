import api from '../../services/api';

import { useState } from 'react';
import { useDelete } from '../../services/useFetch';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Typography from '../../components/typography/Typography';

import './DeleteItem.module.css';

export default function DeleteItem({ deleteStateSet, fetchData, image }) {
  const [label, labelSet] = useState({ label: null });
  const handleDelete = async () => {
    if (label) {
      await useDelete(`${api}/${image._id}`, label);
      fetchData(api);
    }
    deleteStateSet(false);
  };
  return (
    <div className="delete-item">
      <Typography text={'Are you sure?'} type="big" />
      <div className="for-delete mt-2">
        <Typography text={'For confirmation write:'} type="medium" />
        <div className="message-delete">
          <Typography
            text={image.label}
            type="medium"
            color="rgb(235, 87, 87)"
          />
        </div>
      </div>
      <div className="mt-2">
        <Input
          label={` `}
          placeholder="Write the label here"
          onChange={(e) => {
            labelSet({ label: e.target.value });
          }}
        />
      </div>
      <div className="delete-item__button mt-3">
        <div
          onClick={() => {
            console.log(123);
            deleteStateSet(false);
          }}
        >
          <Button type="default" text="Cancel" />
        </div>
        <div onClick={handleDelete}>
          <Button text="Delete" color="rgb(235, 87, 87)" />
        </div>
      </div>
    </div>
  );
}
