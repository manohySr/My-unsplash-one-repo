import api from './services/api';

import { useMemo, useState } from 'react';
import useGet from './services/useFetch';

import Header from './layout/header/Header';
import Gallery from './layout/gallery/Gallery';
import AddItem from './layout/AddItem/AddItem';
import DeleteItem from './layout/DeleteItem/DeleteItem';

import './style.css';
import './App.css';

export default function App() {
  const [addState, addStateSet] = useState(false);
  const [deleteState, deleteStateSet] = useState(false);
  const [image, setImage] = useState('');
  const [search, searchSet] = useState('');
  let { data, fetchData } = useGet(api);

  data = useMemo(() => {
    if (data) data = data.reverse();
    return data;
  }, [data]);

  // console.log(data);

  return (
    <div className="container">
      <div className="mt-3">
        <Header addStateSet={addStateSet} searchSet={searchSet} />
      </div>
      <div className="mt-3">
        <Gallery
          deleteStateSet={deleteStateSet}
          data={data}
          setImage={setImage}
          search={search}
        />
      </div>
      {addState ? (
        <div className="item__container">
          <AddItem addStateSet={addStateSet} fetchData={fetchData} />
        </div>
      ) : (
        <></>
      )}
      {deleteState ? (
        <div className="item__container">
          <DeleteItem
            deleteStateSet={deleteStateSet}
            fetchData={fetchData}
            image={image}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
