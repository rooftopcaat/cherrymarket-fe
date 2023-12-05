// PopupList.js
import React from 'react';
import PopupComponent from './PopupComponents';
import styled from 'styled-components';

const PopupListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PopupList = ({ popupData }) => {
  return (
    <PopupListContainer>
      {popupData && Array.isArray(popupData) && popupData.length > 0 && popupData.map((popup, index) => (
          <PopupComponent
            key={index}
            imageUrl={popup.imageUrl}
            externalLink={popup.externalLink}
          />
        ))}
    </PopupListContainer>
  );
};

export default PopupList;
