import React, { Component } from 'react';
import './App.css';
import PicCard from "./PicCard";
import img from "./img.json";

class App extends Component {
  state = {
    img,
    score: 0,
    topScore: 0,
    imageClicks: [],
    message: "Click an image to begin!",
  };

  imageClick = id => {
    console.log(id);

    this.setState({
      imageClicks: [...this.state.imageClicks, id],

    });
    function shuffle(arr) {
      var i, j, temp;
      for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      return arr;
    };
    shuffle(img);
    if (this.state.imageClicks.indexOf(id) === -1) {
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!"
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({
          topScore: this.state.topScore + 1
        });
      }
    } else {
      this.setState({
        score: 0,
        message: "You guessed incorrectly, please try again!",
        imageClicks: [],
      });
    };
  };

  render() {
    return (
      <div className="p-3 mb-2 bg-light text-dark">
        <div className="row p-3 mb-2 bg-info text-white text-center">
          <div className="col">
            <h4>Clicky Game</h4>
          </div>
          <div className="col">
            <h4>{this.state.message}</h4>
          </div>
          <div className="col">
            <h4>Score: {this.state.score} | Top Score: {this.state.topScore}</h4>
          </div>
      </div>
      <div className="p-3 mb-2 bg-dark text-white">
        <h1 className="text-center">Clicky Game!</h1>
        <h2 className="text-center">Click on an image to earn points, but don't click on any more than once!</h2>
      </div>
      <div className="container">
          {this.state.img.map(imgs => (
            <PicCard
              imageClick={this.imageClick}
              id={imgs.id}
              key={imgs.id}
              image={imgs.image}
              count={this.state.count}
      />
      ))}
      </div>
      <footer className="footer">
        <h2 className="text-center">Try your best to get the highest score!<span>🤪</span></h2>
      </footer> 
      </div>
    );
  }
}

export default App;
