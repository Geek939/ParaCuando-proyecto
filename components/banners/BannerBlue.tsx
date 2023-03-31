import React from 'react';

interface IBannerBlue {
  color?: string;
}

const BannerBlue: React.FC<IBannerBlue> = ({ color }) => {
  return (
    <div
      className={` absolute w-full h-28 bg-${
        color ? color : 'blue'
      }-600 flex items-center`}
    ></div>
  );
};

export default BannerBlue;
