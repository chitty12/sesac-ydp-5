import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Photo() {
  const [photos, setPhotos] = useState([]);
  const getPhoto = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    console.log(res.data.slice(0, 10));
    setPhotos(res.data.slice(0, 10));
    console.log(photos);
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <div>
      <main>
        <div>여기는 사진 목록</div>
        <ul>
          {photos.map((item) => {
            console.log(item);
            return (
              <li key={item.albumId}>
                <h3>사진제목: {item.title}</h3>
                <img
                  src={item.url}
                  alt="랜덤사진"
                  style={{ width: '600px', height: '600px' }}
                ></img>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
