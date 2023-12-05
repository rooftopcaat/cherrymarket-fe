// PopupComponent.js
import React, { useState, useRef, useEffect } from 'react';
import {
  PopupContainer,
  PopupContent,
  PopupImage,
  CloseButtonContainer,
  CloseButton,
  NeverShowAgainButton,
} from './PopupStyles';

const PopupComponent = ({ imageUrl, externalLink }) => {
  const [isHidden, setIsHidden] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    if (imageRef.current) {
      // 이미지가 로드된 후 이미지의 가로 길이를 버튼에 적용
      const imageWidth = imageRef.current.width;
      const closeButton = document.getElementById('closeButton');
      if (closeButton) {
        closeButton.style.width = `${imageWidth / 2}px`;
      }
    }
  }, [imageUrl]);

  const handleClosePopup = () => {
    setIsHidden(true);
  };

  const handleNeverShowAgain = () => {
    setIsHidden(true);
    // 팝업을 다시 보지 않기 위해 로컬 스토리지에 플래그 저장
    localStorage.setItem('popupData', JSON.stringify([]));
  };

  return (
    <div className='pop_obj'>
      <PopupContainer style={{ display: isHidden ? 'none' : 'flex' }}>
        <PopupContent>
          <p>
            <a
              rel="noopener noreferrer"
              href={externalLink}
            >
              <PopupImage
                ref={imageRef}
                src={imageUrl}
                alt="Popup Image"
              >
              </PopupImage>
            </a>
          </p>
          <CloseButtonContainer>
            <CloseButton id="closeButton" onClick={handleClosePopup}>
              닫기
            </CloseButton>
            <NeverShowAgainButton onClick={handleNeverShowAgain}>
              다시 보지 않기
            </NeverShowAgainButton>
          </CloseButtonContainer>
        </PopupContent>
      </PopupContainer>
    </div>
    
  );
};

export default PopupComponent;