import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import formatNumber from "../../ConvertNumToKMBFormat/ConvertNum"
import NavbarComponent from '../navbar/NavbarComponent'

const CardComponent = ({ countryData }) => {
    let population = formatNumber(countryData.population)

    let classes = {
      backgroundColor: "red"
    }

    return (
        

<Container className=' vh-100 '>
<div> <NavbarComponent />  </div>

<div className=' w-100 h-100 d-flex justify-content-center align-items-center'>
<Card style={{ width: '20rem' }}>
<Card.Img variant="top" src={countryData.flagURL} />
<Card.Body>
  <Card.Title>{countryData.name}</Card.Title>
  <Card.Title>{countryData.capital}</Card.Title>
  {/* <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text> */}
</Card.Body>
<ListGroup className="list-group-flush">
  <ListGroup.Item>Continent: {countryData.continents}</ListGroup.Item>
  <ListGroup.Item>Population: {population}</ListGroup.Item>
  <ListGroup.Item>Currency: {countryData.symbol} {countryData.currencyName}</ListGroup.Item>
</ListGroup>
<Card.Body>
       <Link className='btn btn-primary' to="/">Close</Link>
</Card.Body>
</Card>
</div>
</Container>
    )
}

export default CardComponent