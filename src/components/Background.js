// // components/BackgroundOverlay.js

// import React from 'react';
// import logo from '../assets/Logo.jpg';

// const BackgroundOverlay = () => {
//   return (
//     <div
//       className="fixed inset-0 bg-center bg-no-repeat bg-cover pointer-events-none z-0"
//       style={{
//         backgroundImage: `url(${logo})`,
//         backgroundSize: "60%",
//         opacity: 0.3,
//         filter: "blur(4px)",
//       }}
//     ></div>
//   );
// };

// export default BackgroundOverlay;
// components/BackgroundOverlay.js

// import React from 'react';
// import logo from '../assets/Logo.jpg';

// const BackgroundOverlay = () => {
//   return (
//     <div
//       className="fixed inset-0 bg-center bg-no-repeat bg-cover pointer-events-none z-0 opacity-30 blur-sm sm:bg-[length:60%] bg-[length:80%]"
//       style={{
//         backgroundImage: `url(${logo})`,
//       }}
//     ></div>
//   );
// };

// export default BackgroundOverlay;
// components/BackgroundOverlay.js

import React from 'react';
import logo from '../assets/Logo.jpg';

const BackgroundOverlay = () => {
  return (
    <div
      className="fixed inset-0 bg-center bg-no-repeat bg-cover pointer-events-none z-0 opacity-30 blur-sm bg-[length:100%]"
      style={{
        backgroundImage: `url(${logo})`,
      }}
    ></div>
  );
};

export default BackgroundOverlay;
