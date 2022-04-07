import React, { Component } from 'react'

interface PaginatioProps {
  urls: urlList
  color: string
  goPrev: Function,
  goNext: Function
}
interface urlList {
  first:'',
  prev:'',
  next:'',
  last:'',
}
interface PaginationState{
  urls: urlList
  color: string
  goPrev: Function,
  goNext: Function
}


export default class ButtonClass extends Component<PaginatioProps, PaginationState> {

  constructor(props: PaginatioProps){
    super(props)
    this.state={
      urls : props.urls,
      color: props.color,
      goNext: props.goNext,
      goPrev: props.goPrev,
    }
  }

  onPrev = () =>{
    this.props.goPrev()
  }
  onNext = () =>{
    this.props.goNext()
  }

  render() {
    return (
      <nav className='my-4'>
          <ul className='pagination justify-content-center'>
              { this.props.urls.prev ?
                <li className='page-item'>
                    <button className='page-link bg-dark text-white' onClick={this.onPrev}>Previous</button>
                </li>
                : null
              }
              { this.props.urls.next ?
                <li className='page-item'>
                    <button className='page-link bg-dark text-white' onClick={this.onNext}>Next</button>
                </li>
                : null
              }
          </ul>
      </nav>
    )
  }
}