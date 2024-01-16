// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';
import './widgt.css'

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} className='w-25' alt='a dog' />
    </div>
  );
};

export default DogPicture;