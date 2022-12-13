import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import view from '../../../assets/images/view.png'

import './ModalIcons.css'

function ModalView(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='buttonView' style={{background: 'none'}} onClick={handleShow}>
                <img src={view} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Полное описание</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.fullDes}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalView