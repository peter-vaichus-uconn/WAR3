import { useState } from 'react'
import background1 from "./Screenshot 2024-11-21 at 1.21.42 PM.png";
import background2 from "./Screenshot 2024-11-21 at 1.29.16 PM.png";
import ReactCardFlip from 'react-card-flip';
import './App.css'

import { deck1, deck2 } from './faces';
import { Queue } from './faces';

function App() {

  const [p1_count, SetCount] = useState(1)
  const [isFlipped, setIsFlipped] = useState(true);
  const [available, setAvailable] = useState(true)

  //first two cards in the deck. ex: face1 = [2, C2]
  const [face1, SetFace1] = useState(deck1.peek())
  const [face2, SetFace2] = useState(deck2.peek())

  //flip the card (change the state of isFlipped)
  const flipCard = () => {
    setIsFlipped(!isFlipped); 
  };

  //only take a card if the card is removed from the pile
  const flipAvailable = () => {
    setAvailable(!available); 
  };

  function decrement(){
    if(p1_count == 0){return}
    SetCount(p1_count-1)
  }

  function increment(){
    if(p1_count == 52){return}
    SetCount(p1_count+1)
  }




  return (
    <>
    <div>
      {p1_count}
    </div>
    <div>
      <button onClick={increment}>deal</button>
      <button onClick={() => { flipCard(); (available ? (decrement(), flipAvailable()): flipAvailable())}}>flip</button>
      
    </div>

    <div className="pile1">
      {p1_count > 51 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN26"></div>)}
      {p1_count > 50 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN25"></div>)}
      {p1_count > 49 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN24"></div>)}
      {p1_count > 48 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN23"></div>)}
      {p1_count > 47 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN22"></div>)}
      {p1_count > 46 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN21"></div>)}
      {p1_count > 45 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN20"></div>)}
      {p1_count > 44 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN19"></div>)}
      {p1_count > 43 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN18"></div>)}
      {p1_count > 42 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN17"></div>)}
      {p1_count > 41 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN16"></div>)}
      {p1_count > 40 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN15"></div>)}
      {p1_count > 39 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN14"></div>)}
      {p1_count > 38 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN13"></div>)}
      {p1_count > 37 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN12"></div>)}
      {p1_count > 36 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN11"></div>)}
      {p1_count > 35 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN10"></div>)}
      {p1_count > 34 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN9"></div>)}
      {p1_count > 33 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN8"></div>)}
      {p1_count > 32 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN7"></div>)}
      {p1_count > 31 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN6"></div>)}
      {p1_count > 30 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN5"></div>)}
      {p1_count > 29 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN4"></div>)}
      {p1_count > 28 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN3"></div>)}
      {p1_count > 27 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN2"></div>)}
      {p1_count > 26 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card TN1"></div>)}
      
      {p1_count > 25 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T1"></div>)}
      {p1_count > 24 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T2"></div>)}
      {p1_count > 23 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T3"></div>)}
      {p1_count > 22 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T4"></div>)} 
      {p1_count > 21 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T5"></div>)}
      {p1_count > 20 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T6"></div>)}
      {p1_count > 19 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T7"></div>)}
      {p1_count > 18 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T8"></div>)}
      {p1_count > 17 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T9"></div>)} 
      {p1_count > 16 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T10"></div>)}
      {p1_count > 15 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T11"></div>)}
      {p1_count > 14 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T12"></div>)}
      {p1_count > 13 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T13"></div>)}
      {p1_count > 12 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T14"></div>)}
      {p1_count > 11 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T15"></div>)}
      {p1_count > 10 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T16"></div>)}
      {p1_count > 9 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T17"></div>)}
      {p1_count > 8 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T18"></div>)}
      {p1_count > 7 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T19"></div>)}
      {p1_count > 6 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T20"></div>)}
      {p1_count > 5 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T21"></div>)}
      {p1_count > 4 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T22"></div>)}
      {p1_count > 3 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T23"></div>)}
      {p1_count > 2 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T24"></div>)}
      {p1_count > 1 && (<div style={{backgroundImage: `url(${background1})`,backgroundSize: "cover",}}className="card T25"></div>)}
      
      {p1_count > -1 && (
      <>
      {p1_count > 0 && (<div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className= "card"></div>)}
      <ReactCardFlip flipDirection="verticle" isFlipped={isFlipped}>
        <div style={{ backgroundImage: `url(${face1[1]})`,backgroundSize: "cover"}} className= "card TC"></div>
        <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className= "card" ></div>
      </ReactCardFlip>
      </>
      )}
    </div>
    <div className="pile2">
      {p1_count > 51 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN26'></div>}
      {p1_count > 50 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN25'></div>}
      {p1_count > 49 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN24'></div>} 
      {p1_count > 48 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN23'></div>}
      {p1_count > 47 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN22'></div>}
      {p1_count > 46 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN21'></div>}
      {p1_count > 45 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN20'></div>}
      {p1_count > 44 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN19'></div>}
      {p1_count > 43 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN18'></div>}
      {p1_count > 42 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN17'></div>}
      {p1_count > 41 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN16'></div>}
      {p1_count > 40 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN15'></div>}
      {p1_count > 39 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN14'></div>}
      {p1_count > 38 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN13'></div>}
      {p1_count > 37 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN12'></div>}
      {p1_count > 36 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN11'></div>}
      {p1_count > 35 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN10'></div>}
      {p1_count > 34 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN9'></div>}
      {p1_count > 33 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN8'></div>}
      {p1_count > 32 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN7'></div>}
      {p1_count > 31 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN6'></div>}
      {p1_count > 30 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN5'></div>}
      {p1_count > 29 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN4'></div>}
      {p1_count > 28 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN3'></div>}
      {p1_count > 27 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN2'></div>}
      {p1_count > 26 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card BN1'></div>}

      {p1_count > 25 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B1'></div>}
      {p1_count > 24 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B2'></div>}
      {p1_count > 23 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B3'></div>}
      {p1_count > 22 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B4'></div>}
      {p1_count > 21 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B5'></div>}
      {p1_count > 20 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B6'></div>}
      {p1_count > 19 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B7'></div>}
      {p1_count > 18 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B8'></div>}
      {p1_count > 17 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B9'></div>}
      {p1_count > 16 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B10'></div>}
      {p1_count > 15 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B11'></div>}
      {p1_count > 14 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B12'></div>}
      {p1_count > 13 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B13'></div>}
      {p1_count > 12 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B14'></div>}
      {p1_count > 11 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B15'></div>}
      {p1_count > 10 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B16'></div>}
      {p1_count > 9 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B17'></div>}
      {p1_count > 8 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B18'></div>}
      {p1_count > 7 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B19'></div>}
      {p1_count > 6 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B20'></div>}
      {p1_count > 5 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B21'></div>}
      {p1_count > 4 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B22'></div>}
      {p1_count > 3 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B23'></div>}
      {p1_count > 2 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B24'></div>}
      {p1_count > 1 && <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B25'></div>}
      
      {p1_count > -1 && (
      <>
      {p1_count > 0 && (<div style={{ backgroundImage: `url(${background2})`,backgroundSize: "cover"}} className= "card B"></div>)}
        <ReactCardFlip flipDirection="verticle" isFlipped={isFlipped}>
        <div style={{ backgroundImage: `url(${face2[1]})`, backgroundSize: "cover" }} className="card BC"></div>
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className="card B"></div>
      </ReactCardFlip>
      </>
      )}
    </div>
    </>
  )
}

export default App
