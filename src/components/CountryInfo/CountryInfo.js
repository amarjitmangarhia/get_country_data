import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/NavbarComponent'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import CardComponent from '../Card/Card'
import { Container } from 'react-bootstrap'


const CountryInfo = () => {

  const navigate = useNavigate()

  const [arr, setArr] = useState({})

  const [t, setT] = useState(false)
 
  const param = useParams();


  const fetchCountryData = async () => {

    try {

      let fetchUrl = await fetch(`https://restcountries.com/v3.1/name/${param.id}`);
      let response = await fetchUrl.json();

      console.log(fetchUrl.ok)

      if (fetchUrl.ok) {
        setT(true)


        let data = response[0]

        let currencyName = ""
        let symbol = ""

        for (const key in data.currencies) {
          currencyName = data.currencies[key].name
          symbol = data.currencies[key].symbol
        }

        const obj = {
          name: data.name.official,
          capital: data.capital[0],
          continents: data.continents[0],
          flagURL: data.flags.png,
          population: data.population,
          currencyName,
          symbol

        }

        setArr(obj)
      } else {
        setT(false)
        navigate("/notfound")
      }

    } catch (err) {
      console.log("error")
    }
  }


  // fetch(`https://restcountries.com/v3.1/name/${param.id}`)
  //   .then((response) => {
  //     console.log("here i am")
  //     return response.json()
  //   })
  //   .then((data) => {
  //     try {
  //       console.log(data.status, "status")
  //       if(data.status === 404) {
  //         navigate("/notfound")
  //         return
  //       }
  //     } catch(err) {
  //       console.log("error")
  //     }
  //     console.log(data);


const loading = () => {
  return <div className='h-100 d-flex justify-content-center align-items-center'>
    <p className='display-1'>loading</p>
  </div>
}

  useEffect(() => {
    fetchCountryData()
  }, [])

  return (
    <Container className='vh-100'>
     {t ?  <CardComponent countryData={arr} /> : loading()}
    </Container>
  )
}

export default CountryInfo