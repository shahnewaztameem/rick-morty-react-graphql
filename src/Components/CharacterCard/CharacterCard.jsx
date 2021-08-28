import React from 'react'
import './CharacterCard.styles.css'

const CharacterCard = ({ character }) => {
  return (
    <div className='card mb-3 mt-5 character_card'>
      <img src={character.image} class='card-img-top' alt={character.name} />
      <div class='card-body text-center'>
        <h5 class='card-title'>
          {character.name}
        </h5>
      </div>
    </div>
  )
}

export default CharacterCard
