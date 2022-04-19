import AnimeDataModel from '../models/AnimeDataModel'
import React, { useEffect, useState, Component } from 'react'



function AnimeCard(AnimeCardProps: {color:string, cardsToMake:Array<AnimeDataModel>, mode: string}) {
  const [colorToSet, setColor] = useState('')
  useEffect(() => {
    setColor(AnimeCardProps.color)
  }, [colorToSet])
  
  
  return (
    <div className='row'>
        {
          AnimeCardProps.mode==='offline'? 
          <div className="card mx-auto alert alert-danger"><h5>You are offline, please go online to see full content</h5></div>
          : null
        }
        {AnimeCardProps.cardsToMake.length>0? AnimeCardProps.cardsToMake.map((item, index)=>(
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
        )) : 
            <>
              <div className='col'>
                <div className={'card mb-4 mx-auto text-white bg-'+ colorToSet} style={{maxWidth: '300px'}}>
                    <img src='../img/Missing_Image.webp' alt="Error image"/>
                    <h5 className='card-header text-white'></h5>                    
                    <div className='card-body'>
                      <p>Average rating: ?</p>
                      <p>Status: ?</p>
                      <p>Total episodes: ?</p>
                      <p>Starting date: ?</p>
                      <p>End date: ?</p>
                    </div>
                </div>
              </div>
              <div className='col'>
                <div className={'card mb-4 mx-auto text-white bg-'+ colorToSet} style={{maxWidth: '300px'}}>
                    <img src='../img/Missing_Image.webp' alt="Error image"/>
                    <h5 className='card-header text-white'></h5>                    
                    <div className='card-body'>
                      <p>Average rating: ?</p>
                      <p>Status: ?</p>
                      <p>Total episodes: ?</p>
                      <p>Starting date: ?</p>
                      <p>End date: ?</p>
                    </div>
                </div>
              </div>
              <div className='col'>
                <div className={'card mb-4 mx-auto text-white bg-'+ colorToSet} style={{maxWidth: '300px'}}>
                    <img src='../img/Missing_Image.webp' alt="Error image"/>
                    <h5 className='card-header text-white'></h5>                    
                    <div className='card-body'>
                      <p>Average rating: ?</p>
                      <p>Status: ?</p>
                      <p>Total episodes: ?</p>
                      <p>Starting date: ?</p>
                      <p>End date: ?</p>
                    </div>
                </div>
              </div>
              <div className='col'>
                <div className={'card mb-4 mx-auto text-white bg-'+ colorToSet} style={{maxWidth: '300px'}}>
                    <img src='../img/Missing_Image.webp' alt="Error image"/>
                    <h5 className='card-header text-white'></h5>                    
                    <div className='card-body'>
                      <p>Average rating: ?</p>
                      <p>Status: ?</p>
                      <p>Total episodes: ?</p>
                      <p>Starting date: ?</p>
                      <p>End date: ?</p>
                    </div>
                </div>
              </div>
              
            </>
              
        }
    </div>
  ) 
  }


AnimeCard.propTypes = {}

export default AnimeCard
