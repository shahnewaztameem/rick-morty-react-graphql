import React from 'react'
import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FETCH_EPISODES_QUERY = gql`
  query fetchEpisodes {
    episodes {
      results {
        id
        name
        air_date
        episode
        characters {
          name
        }
      }
    }
  }
`
const Episodes = () => {
  const { loading, error, data } = useQuery(FETCH_EPISODES_QUERY)
  if (loading) return <div>Loading..</div>
  if (error) return <div>{error}</div>
  return (
    <Container>
      <Row>
        {data.episodes.results.map((episode) => (
          <Col md={4} key={episode.id}>
            <Link to={`/episode/${episode.id}`}>
              <p>{episode.name}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Episodes
