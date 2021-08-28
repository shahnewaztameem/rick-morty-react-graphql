import React from 'react'
import './EpisodesCard.styles.css'
import { Col, Row } from 'react-bootstrap'

const EpisodesCard = ({ episode }) => {
  return (
    <div className='episode_info mb-2 mt-2 text-center'>
      <Row>
        <Col md={3}>
          <label className='mb-2'>Episode Name</label>
          <div className='episode_name'>{episode.name}</div>
        </Col>
        <Col md={3}>
          <label className='mb-2'>Air Date</label>
          <div className='episode_date'>{episode.air_date}</div>
        </Col>
        <Col md={3}>
          <label className='mb-2'>Episode</label>
          <div className='episode_episode'>{episode.episode}</div>
        </Col>

        <Col md={3}>
          <label className='mb-2'>Character</label>
          <div className='episode_character'>
            {episode.characters
              .filter((character, index) => index === 0)
              .map((character) => character.name)}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default EpisodesCard
