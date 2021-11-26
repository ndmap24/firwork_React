import React from 'react';
import {Modal} from 'react-bootstrap';
import StarshipMiningInterface from './StarshipMiningInterface';

export default function Pop(props) {

    return (
      <>
        <Modal show={props.show} onHide={props.handleClose}>
            <StarshipMiningInterface/>
        </Modal>
      </>
    );
  }
 
 