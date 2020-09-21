import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function MyModal({toggle,modal,modalText}) {
    return (
        <div>
        <Button color="danger" onClick={toggle}></Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Attention</ModalHeader>
            <ModalBody>
            {modalText}
            </ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    </div>
    )
}
