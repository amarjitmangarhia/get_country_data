import React from 'react'
import Navbar from '../navbar/NavbarComponent'
import SearchBar from '../searchBar/SearchBar'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from '../navbar/NavbarComponent'

const Home = () => {
  return (
     <Container className='vh-100'>

      <NavbarComponent />
      <div className='h-100 d-flex justify-content-center align-items-center'>
        <SearchBar />
        </div>

    </Container>


          
  )
}

export default Home