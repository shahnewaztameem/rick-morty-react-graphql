import React from 'react'
import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FETCH_CHARACTERS_QUERY = gql`
  query getAllCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`
const Characters = () => {
  const { loading, error, data } = useQuery(FETCH_CHARACTERS_QUERY)
  if (loading) return <div>Loading..</div>
  if (error) return <div>{error}</div>
  return (
    <Container>
      <Row>
        {data.characters.results.map((character) => (
          <Col md={4} key={character.id}>
            <Link to={`/character/${character.id}`}>
              <p>{character.name}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Characters
