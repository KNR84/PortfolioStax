// // BannerRotator.js
// import React, { useEffect, useState } from 'react';

// const BannerRotator = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(intervalId); // Clean up interval on component unmount
//   }, [images.length]);

//   return (
//     <div className="banner">
//       <img src={images[currentIndex]} alt="Banner Image" />
//     </div>
//   );
// };

// export default BannerRotator;



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

