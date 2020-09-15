import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from '../../data/data'

// class component
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageSlideshow: data.imageSlideshow,
      imageSlide: data.imageSlideshow[0]
    }
  }

  nextImageSlide = () => {
    const newIndex = this.state.imageSlide.index + 1;
    this.setState({
      imageSlide: data.imageSlideshow[newIndex]
    })
  }

  prevImageSlide = () => {
    const newIndex = this.state.imageSlide.index - 1;
    this.setState({
      imageSlide: data.imageSlideshow[newIndex]
    })
  }

  render() {
    const { imageSlideshow, imageSlide } = this.state;
    return (
      <div className="App">

        <div className="page">

          {/* <button
            onClick={() => this.prevImageSlide()}
            disabled={imageSlide.index === 0}
          >Prev</button>
          <button
            onClick={() => this.nextImageSlide()}
            disabled={imageSlide.index === data.imageSlideshow.length - 1}
          >Next</button> */}
{/* 
          <div className="col">
            <div className={`cards-slider active-slide-${imageSlide.index}`}>
              <div className="cards-slider-wrapper" style={{
                'transform': `translateX(-${imageSlide.index * (100 / imageSlideshow.length)}%)`
              }}>
                {
                  imageSlideshow.map(imageSlide => <Card key={imageSlide._id} imageSlide={imageSlide} />)
                }
              </div>
            </div>
          </div> */}

        </div>
      </div>
    );
  }
}

export default App;
