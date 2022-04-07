import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class AnimeDataModel extends Component {
  id: number = 0;
  attributes = {
      titles : {
        en: '',
        jp: '',
      },
      canonicalTitle: '',
      averageRating:'',
      status:'',
      startDate: '',
      endDate: '',
      episodeCount: 0,
      posterImage: {
        small: '',
        medium:'',
        large: '',
        tiny:''
      }
  };  
}

export default AnimeDataModel