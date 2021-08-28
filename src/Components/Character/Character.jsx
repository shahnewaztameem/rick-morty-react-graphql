import React from 'react'
import { useQuery } from '@apollo/client'
import { Row, Col, Container, Image, ListGroup } from 'react-bootstrap'
import Spinner from '../Spinner/Spinner'
import { FETCH_CHARACTER_QUERY } from '../../queries'

const Character = ({ match }) => {
  const id = match.params.id
  const { loading, error, data } = useQuery(FETCH_CHARACTER_QUERY, {
    variables: { id: parseInt(id) },
  })

  if (loading) return <Spinner />
  if (error) return <div>{error}</div>

  const { name, status, species, gender, origin, location, image, episode } =
    data.character

  return (
    <Container>
      <Row className='mt-5 mb-5'>
        <Col md={4}>
          <Image src={image} roundedCircle />
        </Col>
        <Col md={8}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Name:</Col>
                <Col>{name}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{status}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Species:</Col>
                <Col>{species}</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Gender:</Col>
                <Col>{gender}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Origin:</Col>
                <Col>{origin.name}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Location:</Col>
                <Col>{location.name}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col md={12} className='text-center'>
          <h1>Episodes</h1>
          {episode.map((ep) => (
            <ListGroup.Item>
              <Row>
                <Col>{ep.name}:</Col>
                <Col>{ep.episode}</Col>
              </Row>
            </ListGroup.Item>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Character
