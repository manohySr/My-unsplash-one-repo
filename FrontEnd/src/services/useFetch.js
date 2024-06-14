import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, dataSet] = useState(null);
  const fetchData = async (url) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      dataSet(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, fetchData };
}

export async function usePost(url, body) {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders,
    body: JSON.stringify(body),
  };
  await fetch(url, requestOptions);
}

export async function useDelete(url, body) {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders,
    body: JSON.stringify(body),
  };
  try {
    let result = await fetch(url, requestOptions);
    result = await result.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
