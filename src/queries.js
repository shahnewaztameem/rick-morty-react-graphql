import { gql } from 'apollo-boost'

export const FETCH_CHARACTERS_QUERY = gql`
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
export const FETCH_CHARACTER_QUERY = gql`
  query getSingleCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }

      image
      episode {
        name
        episode
      }
    }
  }
`

export const FETCH_EPISODE_QUERY = gql`
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
      created
    }
  }
`

export const FETCH_EPISODES_QUERY = gql`
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

export const FETCH_LOCATION_QUERY = gql`
  query getSingleLocation($id: ID!) {
    location(id: $id) {
      name
      type
      dimension
    }
  }
`

export const FETCH_LOCATIONS_QUERY = gql`
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