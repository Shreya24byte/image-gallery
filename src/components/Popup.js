import React from "react";
 
export const Popup = ({selectedImg, setSelectedImg}) => {
  const handleClick = (e) => {
    setSelectedImg(null);
  }
  return (
    <div className="backdrop">
      <span className="close" onClick={handleClick}>&times;</span>
      <img className="backdrop-image" src={selectedImg} alt="img" width="" height=""/>
    </div>
  );
};
 