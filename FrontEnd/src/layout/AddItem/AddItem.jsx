import api from '../../services/api';

import { useState } from 'react';
import { usePost } from '../../services/useFetch';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Typography from '../../components/typography/Typography';

import './AddItem.module.css';

export default function AddItem({ addStateSet, fetchData }) {
  const [body, bodySet] = useState({ label: null, photo: null });
  const handleSubmit = async () => {
    // console.log(123);
    if (body.label && body.photo) {
      console.log(body);
      await usePost(api, body);
      fetchData(api);
    }
    addStateSet(false);
  };
  return (
    <div className="add-item">
      <Typography text={'Add a new photo'} />
      <div className="mt-3">
        <Input
          label="Label"
          placeholder={'Suspendis elis massa'}
          onChange={(e) =>
            bodySet({ label: e.target.value, photo: body.photo })
          }
        />
      </div>
      <div className="mt-2">
        <Input
          label="Photo URL"
          placeholder={'D:DOSSIER FIANARANA POLYTECh...'}
          onChange={(e) =>
            bodySet({ label: body.label, photo: `${e.target.value}` })
          }
        />
      </div>

      <div className="add-item__button mt-2">
        <div
          onClick={() => {
            // console.log(123);
            addStateSet(false);
          }}
        >
          <Button type="default" text="Cancel" />
        </div>
        <div onClick={handleSubmit}>
          <Button text="Submit" />
        </div>
      </div>
    </div>
  );
}
