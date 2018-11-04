import React, { Component } from "react";
import charles from "../images/charles.png";
import chris from "../images/chris.png";
import christian from "../images/christian.png";
import clyde from "../images/clyde.png";
import david from "../images/david.png";
import john from "../images/john.png";
import karl from "../images/karl.png";
import larry from "../images/larry.png";
import magic from "../images/magic.png";
import michael from "../images/michael.png";
import patrick from "../images/patrick.png";
import scotty from "../images/scotty.png";

class Photos extends Component {
  constructor(props) {
    super();

    this.state = {
      array: [
        "charles.png",
        "chris.png",
        "christian.png",
        "clyde.png",
        "david.png",
        "john.png",
        "karl.png",
        "larry.png",
        "magic.png",
        "michael.png",
        "patrick.png",
        "scotty.png"
      ],
      clickedArr: [],
      userScore: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(image) {
    let newArr2 = this.state.clickedArr;
    newArr2.push(image);
    this.setState({
      clickedArr: newArr2
    });
    console.log(this.state.clickedArr);
    // console.log(image);

    let checkArr = image;

    if (this.state.clickedArr.length <= 1) {
      this.setState({
        userScore: this.state.userScore + 1
      });
    }
    console.log(this.state.userScore);
    if (this.state.userScore >= 1) {
      for (let b in this.state.clickedArr) {
        if (checkArr !== this.state.clickedArr[b]) {
          this.setState({
            userScore: this.state.userScore + 1
          });
        // } else {
        //   this.setState({
        //     userScore: 0
        //   });
        }
      }
    }
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }

    let newArr = shuffle(this.state.array);
    this.setState({
      array: newArr
    });

    //   this.setState({
    //     userScore: this.state.userScore + 1
    //   });
  }

  render() {
    let images = this.state.array.map(image => {
      return (
        <img
          key={image}
          src={require(`../images/${image}`)}
          alt={image}
          className="img-responsive"
          onClick={() => {
            this.handleClick(image);
          }}
        />
      );
    });

    return (
      <div className="container">
        <footer className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h4>Your Score: {this.state.userScore}</h4>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">{images}</div>
        </footer>
      </div>
    );
  }
}

export default Photos;
