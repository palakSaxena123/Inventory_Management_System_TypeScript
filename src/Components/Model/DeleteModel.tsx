import React from 'react';
import '../Model/DeleteModel.css';

interface DeleteModelProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: number) => void;
  title: string;
  message: string;
  deleteIndex : number ;
}

const DeleteModel: React.FC<DeleteModelProps> = ({ isOpen, onClose, onConfirm, title, message, deleteIndex }) => {
  if (!isOpen) return null;

  const handleConfirmClick = () => {
    onConfirm(deleteIndex);
  };

  return (
    <div className="model">
      <label className='model-label'>
        <h3 style={{ textAlign: 'center' }}>{title}</h3>
        <p>{message}</p>
      </label>
      <div className='btns'>
        <button style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 12px', border: 'none' }} onClick={handleConfirmClick}>
          Confirm
        </button>
        <button style={{ backgroundColor: 'red', color: 'white', padding: '8px 12px', border: 'none' }} className='deleteCancel' onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModel;




