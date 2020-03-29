import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
    <Modal
        isOpen={!!props.selectedExpense}
        onRequestClose={props.handleClearSelectedExpense}
        contentLabel='Are you sure do you want to delete?'
        closeTimeoutMS={200}
        className='modal'
    >
        <h2 className='modal__title'>Confirmation</h2>
        <h3 className="modal__body">Are you sure do you want to delete?</h3>
        <div className='space-buttons'>
            <button id='buttonNo' className="button" onClick={props.handleClearSelectedExpense}>No</button>
            <button id='buttonYes' className="button" onClick={props.handleRemoveExpense}>Yes</button>
        </div>
    </Modal>
);
export default RemoveModal;