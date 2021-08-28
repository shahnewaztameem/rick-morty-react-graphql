import React from 'react'
import { useQuery } from '@apollo/client'
import { Row, Col, Container, Image, ListGroup } from 'react-bootstrap'
import './Episode.styles.css'
import Spinner from '../Spinner/Spinner'
import { FETCH_EPISODE_QUERY } from '../../queries'

const Episode = ({ match }) => {
  const id = match.params.id
  const { loading, error, data } = useQuery(FETCH_EPISODE_QUERY, {
    variables: { id: parseInt(id) },
  })

  if (loading) return <Spinner />
  if (error) return <div>{error}</div>

  const { name, air_date, episode, characters } = data.episode

  return (
    <Container>
      <Row className='mt-5'>
        <div className='episode_card'>
          <ListGroup as='ul'>
            <ListGroup.Item as='li' active>
              <Row>
                <Col>
                  <div className='name'>Details of {name}</div>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item as='li'>
              <Row>
                <Col>
                  <label>Air Date: </label>
                  <div>{air_date}</div>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item as='li'>
              <Row>
                <Col>
                  <label>Episode </label>
                  <div>{episode}</div>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item as='li'>
              <Row>
                <Col>
                  <label>Characters </label>
                  <div className='d-flex flex-wrap'>
                    {characters.map((character) => (
                      <Col md={1} className='mt-2 me-2'>
                        <Image src={character.image} fluid />
                      </Col>
                    ))}
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Row>
    </Container>
  )
}

export default Episode
