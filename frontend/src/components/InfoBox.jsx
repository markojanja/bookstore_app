import React from 'react';

const InfoBox = ({ message }) => {
  return (
    <p className="bg-blue-200 border border-blue-500 rounded p-5 text-blue-500 text-center self-start w-max">
      {message}
    </p>
  );
};

export default InfoBox;
