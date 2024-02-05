import React from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'; // Import icons from your preferred icon library
import PropTypes from 'prop-types';

function ImageModal({ currentImage, goToNext, goToPrev, closeModal, setIsModalOpen }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={closeModal}>
      <div className="p-4 rounded-lg relative" onClick={e => e.stopPropagation()}>
        <img src={currentImage} alt="Current" className="w-full h-auto" />
        <button className="absolute top-2 right-2 text-white p-2" onClick={() => { closeModal(); setIsModalOpen(false); }}>
          <IoClose size={36} />
        </button>
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-2" onClick={goToPrev}>
          <IoChevronBack size={36} />
        </button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2" onClick={goToNext}>
          <IoChevronForward size={36} />
        </button>
      </div>
    </div>
  );
}

ImageModal.propTypes = {
    currentImage: PropTypes.string.isRequired,
    goToNext: PropTypes.func.isRequired,
    goToPrev: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
  };

export default ImageModal;