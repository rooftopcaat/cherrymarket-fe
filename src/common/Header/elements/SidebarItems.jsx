import React from 'react';

export default function HeadSidebarItems({ imageName, label }) {
  const imagePath = require(`../../../assets/categoryIcon/${imageName}.jpg`);

  return (
    <div>
      <img src={imagePath} alt={label} />
      <span>{label}</span>
    </div>
  );
}

