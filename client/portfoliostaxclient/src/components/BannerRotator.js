//this is the function to rotate the banner photo on the homepage
import React, { useEffect, useState } from 'react';

const BannerRotator = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [images]);

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="Banner Image" />
    </div>
  );
};

export default BannerRotator;

