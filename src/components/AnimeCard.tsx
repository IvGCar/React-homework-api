import AnimeDataModel from '../models/AnimeDataModel'
import React, { useEffect, useState, Component } from 'react'



function AnimeCard(AnimeCardProps: {color:string, cardsToMake:Array<AnimeDataModel>}) {
  const [colorToSet, setColor] = useState('')
  useEffect(() => {
    setColor(AnimeCardProps.color)
  }, [colorToSet])
  
  
  return (
    <div className='row'>
        {AnimeCardProps.cardsToMake.map((item, index)=>(
              <div key={index} className='col'>
                  <div className={'card mb-4 mx-auto text-white bg-'+ colorToSet} style={{maxWidth: '300px'}}>
                      <img src={item.attributes.posterImage.small} alt="Anime image"/>
                      <h5 className='card-header text-white'>{item.attributes.canonicalTitle}</h5>                    
                      <div className='card-body'>
                        <p>Average rating: {item.attributes.averageRating}</p>
                        <p>Status: {item.attributes.status}</p>
                        <p>Total episodes: {item.attributes.episodeCount}</p>
                        <p>Starting date: {item.attributes.startDate}</p>
                        <p>End date: {item.attributes.endDate}</p>
                      </div>
                  </div>
              </div>
        ))
        }
    </div>
  ) 
  }


AnimeCard.propTypes = {}

export default AnimeCard
