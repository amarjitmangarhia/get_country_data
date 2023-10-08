import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { InputGroup, Form, Button, Container, Row, Col } from 'react-bootstrap';

const SearchBar = () => {

  const searchValue = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState("")

  // console.log(error)


  const getData = () => {
    let countryName = searchValue.current.value;
    if (!countryName) {
      setError("Field should not be empty!")
    } else if (countryName >= 0) { 
      setError("Field should not be a number!")
    } else {
      navigate(`/country/${countryName}`);
    }
  }


  return (
    <>
      <Container style={{ maxWidth: "450px" }} >
        <Row>
          <h2 className="fs-1 mb-3 fw-bold">Search Your Country</h2>
          <InputGroup>
            <Form.Control type="email" placeholder="Search Any Country" ref={searchValue}></Form.Control>
            <Button onClick={getData}>Search</Button>
          </InputGroup>
          <p className='position-absolute w-auto' style={{bottom: "240px"}}>{error}</p>
        </Row>


      </Container>
    </>
  )
}

export default SearchBar