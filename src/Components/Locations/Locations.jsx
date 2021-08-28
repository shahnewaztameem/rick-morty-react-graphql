import React from 'react'
import { useQuery } from '@apollo/client'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Locations.styles.css'
import Spinner from '../Spinner/Spinner'
import { FETCH_LOCATIONS_QUERY } from '../../queries'

const Locations = () => {
  const { loading, error, data } = useQuery(FETCH_LOCATIONS_QUERY)
  if (loading) return <Spinner />
  if (error) return <div>{error}</div>
  return (
    <Container>
      <Row className='mt-5'>
        <h1>Locations</h1>
        {data.locations.results.map((location) => (
          <Col md={12} key={location.id}>
            <Link to={`/location/${location.id}`}>
              <Row className='d-flex'>
                <div className='location_info d-flex mb-4'>
                  <Col>{location.name}</Col>
                  <Col>{location.type}</Col>
                  <Col>{location.dimension}</Col>
                </div>
              </Row>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Locations
