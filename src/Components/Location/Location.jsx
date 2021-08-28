import React from 'react'
import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'
import { Row, Col, Container, Image, ListGroup } from 'react-bootstrap'
import './Location.styles.css'
import Spinner from '../Spinner/Spinner'

const FETCH_LOCATION_QUERY = gql`
  query getSingleLocation($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
    }
  }
`

const Location = ({ match }) => {
  const id = match.params.id
  const { loading, error, data } = useQuery(FETCH_LOCATION_QUERY, {
    variables: { id: parseInt(id) },
  })

  if (loading) return <Spinner />
  if (error) return <div>{error}</div>

  const { name, type, dimension } = data.location

  console.log(data)

  return (
    <Container>
      <Row>
        <Col md={12}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Name:</Col>
                <Col>{name}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Type:</Col>
                <Col>{type}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Dimension:</Col>
                <Col>{dimension}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Location
