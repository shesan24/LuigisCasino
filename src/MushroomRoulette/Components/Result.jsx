import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Result = ({show,msg,setShow,setMsg}) => {
    const handleClose = () => {setShow(false); setMsg('');};
    
    return(
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>{msg}</Modal.Body>
            </Modal>
        </div>
    )
}

export default Result;