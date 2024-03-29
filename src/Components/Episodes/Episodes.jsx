import React from 'react'
import { useQuery } from '@apollo/client'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EpisodesCard from '../EpisodesCard/EpisodesCard'
import Spinner from '../Spinner/Spinner'
import { FETCH_EPISODES_QUERY } from '../../queries'

const Episodes = () => {
  const { loading, error, data } = useQuery(FETCH_EPISODES_QUERY)
  if (loading) return <Spinner />
  if (error) return <div>{error}</div>
  return (
    <Container>
      <Row className='mt-4'>
        <h1>Episodes</h1>
        {data.episodes.results.map((episode) => (
          <Col md={12} key={episode.id}>
            <Link to={`/episode/${episode.id}`}>
              <EpisodesCard episode={episode} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Episodes
