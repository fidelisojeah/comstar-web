import React from 'react';
import ContentLoader from "react-content-loader"

function LazyLoadingCard(props) {
  return (
    <div
      className={`card`}
    >
      <ContentLoader
      preserveAspectRatio="xMaxYMid meet"
      >

        <rect
          x="15%"
          y="0"
          rx="4"
          ry="4"
          width="70%"
          height="30px"
        />
        <rect
          x="5%"
          y="50%"
          rx="4"
          ry="4"
          width="90%"
          height="15px"
        />
        <rect
          x="10%"
          y="85%"
          rx="4"
          ry="4"
          width="80%"
          height="15px"
        />
      </ContentLoader>

    </div>
  );
}
// function LazyLoadingCard(props) {
//   return (
//     <div
//       className={`card lazy-loading`}
//     >
//       <ContentLoader
//         primaryColor="#f3f3f3"
//         secondaryColor="#ecebeb"
//       >
//         <circle cx="182" cy="32" r="80" />
//     <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
//     <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
//       </ContentLoader>
//     </div>
//   );
// }
// function LazyLoadingCard(props) {
//   return (
//     <div
//       className={`card lazy-loading`}
//     >
//       <div className="animated-background">
//         <div className="background-masker lazy-image-holder" />
//         <div className="background-masker lazy-image-holder-2" />
//         <div className="background-masker lazy-title" />
//         <div className="background-masker lazy-title-right" />
//         <div className="background-masker lazy-title-left" />
//         <div className="background-masker lazy-text" />
//         <div className="background-masker lazy-text-1" />
//         <div className="background-masker lazy-text-2" />
//         <div className="background-masker lazy-text-3" />
//         <div className="background-masker lazy-learn-more" />
//       </div>
//     </div>
//   );
// }
export default LazyLoadingCard;
