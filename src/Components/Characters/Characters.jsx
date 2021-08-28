import React from 'react'
import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CharacterCard from '../CharacterCard/CharacterCard'
import Spinner from '../Spinner/Spinner'

const FETCH_CHARACTERS_QUERY = gql`
  query getAllCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`
const Characters = () => {
  const { loading, error, data } = useQuery(FETCH_CHARACTERS_QUERY)
  if (loading) return <Spinner />
  if (error) return <div>{error}</div>
  return (
    <Container>
      <Row className='mt-5'>
        <h1>Characters</h1>
        {data.characters.results.map((character) => (
          <Col md={3} key={character.id}>
            <Link to={`/character/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Characters
