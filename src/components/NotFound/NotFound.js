import React from 'react'
import { InputGroup, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className='vh-100 d-flex flex-column justify-content-center align-items-center'>
    <div className='display-1'>Country Not Found!</div>
    <Link className='btn btn-primary mt-3' to="/">Go Back</Link>
    </Container>
  )
}

export default NotFound