import React, { Component } from "react";


// createImgDiv = (x) => {
//     const arr = [];
//     for (let i = 0; i < 12; i++){
//         arr.push(<img
//             style={{
//               backgroundColor: this.state.backgroundColor,
//               height: this.state.height,
//               width: this.state.width,
//               key: {i}
//             }}>{x}
//           </img>)
//         }
//     }
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
// let appendImg = arr.map(function(x){
//   render(){
    
//   }
// })

class Photos extends Component {
  render() {

    let array = ["wood", "lake", "sun", "moon", "sea"];

    let images = array.map(image => {
       return <img key={image} src={require(`./icons/${image}.png`)} alt='hi' className="img-responsive" />
    });

    return (
        <div className="container">
            <footer className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h4>Some text</h4>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                   { images }
                </div>
            </footer>
        </div>
    );
}
}


export default Photos;
