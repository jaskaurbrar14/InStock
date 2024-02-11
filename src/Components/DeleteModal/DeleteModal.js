import React from 'react';

import closeIcon from '../../assets/Icons/close-24px.svg';

import './DeleteModal.scss'

function DeleteModal ({ isOpen, closeModal, warehouseName }) {
    return (
        <div>
            {isOpen && (
                <div className="deletemodal">
                    <div className="deletemodal__modal">
                        <button className="deletemodal__modal__closebtn" onClick={closeModal}>
                            <img src={closeIcon} />
                        </button>
                        <div className="deletemodal__modal__header">
                            <h2>Delete {warehouseName} warehouse?</h2>
                        </div>
                        <div className="deletemodal__modal__body">
                            Please confirm that you'd like to delete the {warehouseName} from the list of warehouses. You won't be able to undo this action.
                        </div>
                        <div className="deletemodal__modal__footer">
                            <button className="deletemodal__modal__footer__cancelbtn" onClick={closeModal}>Cancel</button>
                            <button className="deletemodal__modal__footer__deletebtn">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DeleteModal;