import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './ModalIcons.css'

function ModalIcon(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Подробнее
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

export default ModalIcon