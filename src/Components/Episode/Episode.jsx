import React from 'react'
import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'
import { Row, Col, Container, Image, ListGroup } from 'react-bootstrap'

const FETCH_EPISODE_QUERY = gql`
  query fetchEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
      }
    }
  }
`

const Episode = ({ match }) => {
  const id = match.params.id
  const { loading, error, data } = useQuery(FETCH_EPISODE_QUERY, {
    variables: { id: parseInt(id) },
  })

  if (loading) return <div>Loading..</div>
  if (error) return <div>{error}</div>

  const { name, air_date, episode, characters } = data.episode

  return (
    <Container>
      <Row>
        <Col> {name}</Col>
        <Col> {air_date}</Col>
        <Col> {episode}</Col>
      </Row>
    </Container>
  )
}

export default Episode
