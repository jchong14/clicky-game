import React, { Component } from "react";
import charles from '../images/charles.png';
import chris from '../images/chris.png';
import christian from '../images/christian.png';
import clyde from '../images/clyde.png';
import david from '../images/david.png';
import john from '../images/john.png';
import karl from '../images/karl.png';
import larry from '../images/larry.png';
import magic from '../images/magic.png';
import michael from '../images/michael.png';
import patrick from '../images/patrick.png';
import scotty from '../images/scotty.png';


class Photos extends Component {
    render() {
        return (
          <div>

            <img className="image" id="image1" src={charles} />
            <img className="image" id="image2" src={chris} />
            <img className="image" id="image3" src={christian} />
            <img className="image" id="image4" src={clyde} />
            <img className="image" id="image5" src={david} />
            <img className="image" id="image6" src={john} />
            <img className="image" id="image7" src={karl} />
            <img className="image" id="image8" src={larry} />
            <img className="image" id="image9" src={magic} />
            <img className="image" id="image10" src={michael} />
            <img className="image" id="image11" src={patrick} />
            <img className="image" id="image12" src={scotty} />

          </div>
        );
      }
    }

export default Photos;


// </div>

//
// <button data-num="" id="button1">
//     <img class="image" id="image1" src="assets/images/toad.png">
//     </button>
//     <button data-num="" id="button2">
//     <img class="image" id="image2" src="assets/images/peach.png">
//     </button>
//     <button data-num="" id="button3">
//     <img class="image" id="image3" src="assets/images/yoshi.png">
//     </button>
//     <button data-num="" id="button4">
//     <img class="image" id="image4" src="assets/images/bowser.png">
//     </button>
