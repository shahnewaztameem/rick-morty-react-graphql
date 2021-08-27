import React from 'react'
import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FETCH_LOCATIONS_QUERY = gql`
  query getAllLocations {
    locations {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`
const Locations = () => {
  const { loading, error, data } = useQuery(FETCH_LOCATIONS_QUERY)
  if (loading) return <div>Loading..</div>
  if (error) return <div>{error}</div>
  return (
    <Container>
      <Row>
        {data.locations.results.map((location) => (
          <Col md={4} key={location.id}>
            <Link to={`/location/${location.id}`}>
              <p>{location.name}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Locations
