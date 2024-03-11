// import React from "react";
// import bannerphoto from '../Images/bannerphoto.png';


// export default function Home() {
//   return (
//     <div>
//       {/* Banner section */}
//       {/* <div className="banner">
//       <img src={bannerphoto} alt="bannerphoto" />
//       </div> */}

//        {/* Divider line */}
//        <div className="divider"></div>

//       {/* Four sections */}
//       <div className="section">
//         <div className="content">
//           <h4>Create Your Portfolio</h4>
//           <p>From worksheets to science experiments and field trips, capture every milestone. It's not just a portfolio; it's a living testament to their journey. Dive in and let the magic unfold! </p>
//           <button>Learn More</button>
//         </div>
//       </div>

//       <div className="section">
//         <div className="content">
//           <h4>Edit Your Portfolio</h4>
//           <p>Dive into your child's progress, tweak, and tailor throughout the year. It's your dynamic canvas to witness growth firsthand. Let's embark on this journey together!</p>
//           <button>Learn More</button>
//         </div>
//       </div>

//       <div className="section">
//         <div className="content">
//           <h4>Keep Organized</h4>
//           <p>Track homeschooling activities, deadlines, and reviews on our calendar. Plus, never miss a beat with handy reminders. Let's streamline your homeschooling journey together!</p>
//           <button>Learn More</button>
//         </div>
//       </div>

//       <div className="section">
//         <div className="content">
//           <h4>Share Your Progress</h4>
//           <p>Invite reviewers to assess your child's journey and ensure they meet standards for advancement. Together, let's pave the way for their bright future!</p>
//           <button>Learn More</button>
//         </div>
//            {/* Footer */}
//       <div className="footer">
//         Your footer text goes here
//       </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import BannerRotator from "./BannerRotator";
import bannerphoto from '../Images/bannerphoto.png'; // Importing bannerphoto.png
import logo from '../Images/logo.png'

export default function Home() {
  const images = [bannerphoto, logo]; // Array for banner swap out. 
  return (
    <div>
      <BannerRotator images={images} />

      {/* Divider line */}
      <div className="divider"></div>

      {/* Four sections */}
      <div className="section">
        <div className="content">
          <h4>Create Your Portfolio</h4>
          <p>From worksheets to science experiments and field trips, capture every milestone. It's not just a portfolio; it's a living testament to their journey. Dive in and let the magic unfold! </p>
          <button>Learn More</button>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h4>Edit Your Portfolio</h4>
          <p>Dive into your child's progress, tweak, and tailor throughout the year. It's your dynamic canvas to witness growth firsthand. Let's embark on this journey together!</p>
          <button>Learn More</button>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h4>Keep Organized</h4>
          <p>Track homeschooling activities, deadlines, and reviews on our calendar. Plus, never miss a beat with handy reminders. Let's streamline your homeschooling journey together!</p>
          <button>Learn More</button>
        </div>
      </div>

      <div className="section">
        <div className="content">
          <h4>Share Your Progress</h4>
          <p>Invite reviewers to assess your child's journey and ensure they meet standards for advancement. Together, let's pave the way for their bright future!</p>
          <button>Learn More</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
      <h4>Your Homeschool, Your Portfolio, Our Tech</h4>
      </div>
    </div>
  );
}
