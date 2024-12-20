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
    if(p1_count == 24){return}
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
      {p1_count > 23 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T1"
        >
          card1
        </div>
      )}
      {p1_count > 22 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T2"
        >
          card2
        </div>
      )}
      {p1_count > 21 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T3"
        >
          card3
        </div>
      )}
      {p1_count > 20 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T4"
        >
          card4
        </div>
      )}
      {p1_count > 19 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T5"
        >
          card5
        </div>
      )}
      {p1_count > 18 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T6"
        >
          card6
        </div>
      )}
      {p1_count > 17 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T7"
        >
          card7
        </div>
      )}
      {p1_count > 16 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T8"
        >
          card8
        </div>
      )}
      {p1_count > 15 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T9"
        >
          card9
        </div>
      )}
      {p1_count > 14 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T10"
        >
          card10
        </div>
      )}
      {p1_count > 13 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T11"
        >
          card11
        </div>
      )}
      {p1_count > 12 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T12"
        >
          card12
        </div>
      )}
      {p1_count > 11 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T13"
        >
          card13
        </div>
      )}
      {p1_count > 10 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T14"
        >
          card14
        </div>
      )}
      {p1_count > 9 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T15"
        >
          card15
        </div>
      )}
      {p1_count > 8 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T16"
        >
          card16
        </div>
      )}
      {p1_count > 7 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T17"
        >
          card17
        </div>
      )}
      {p1_count > 6 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T18"
        >
          card18
        </div>
      )}
      {p1_count > 5 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T19"
        >
          card19
        </div>
      )}
      {p1_count > 4 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T20"
        >
          card20
        </div>
      )}
      {p1_count > 3 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T21"
        >
          card21
        </div>
      )}
      {p1_count > 2 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T22"
        >
          card22
        </div>
      )}
      {p1_count > 1 && (
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="card T23"
        >
          card23
        </div>
      )}
      {p1_count > -1 && (
      <>
      {p1_count > 0 && (
      <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className= "card">
      </div>
      )}
      <ReactCardFlip flipDirection="verticle" isFlipped={isFlipped}>
        <div style={{ backgroundImage: `url(${face1[1]})`,backgroundSize: "cover"}} className= "card TC">
        </div>

        <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className= "card" >
        </div>
      </ReactCardFlip>
      </>
      )}
    </div>
    <div className="pile2">
      {p1_count > 23 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B1'>
          card1
        </div>
      )}
      {p1_count > 22 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B2'>
          card2
        </div>
      )}
      {p1_count > 21 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B3'>
          card3
        </div>
      )}
      {p1_count > 20 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B4'>
          card4
        </div>
      )}
      {p1_count > 19 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B5'>
          card5
        </div>
      )}
      {p1_count > 18 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B6'>
          card6
        </div>
      )}
      {p1_count > 17 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B7'>
          card7
        </div>
      )}
      {p1_count > 16 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B8'>
          card8
        </div>
      )}
      {p1_count > 15 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B9'>
          card9
        </div>
      )}
      {p1_count > 14 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B10'>
          card10
        </div>
      )}
      {p1_count > 13 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B11'>
          card11
        </div>
      )}
      {p1_count > 12 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B12'>
          card12
        </div>
      )}
      {p1_count > 11 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B13'>
          card13
        </div>
      )}
      {p1_count > 10 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B14'>
          card14
        </div>
      )}
      {p1_count > 9 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B15'>
          card15
        </div>
      )}
      {p1_count > 8 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B16'>
          card16
        </div>
      )}
      {p1_count > 7 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B17'>
          card17
        </div>
      )}
      {p1_count > 6 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B18'>
          card18
        </div>
      )}
      {p1_count > 5 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B19'>
          card19
        </div>
      )}
      {p1_count > 4 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B20'>
          card20
        </div>
      )}
      {p1_count > 3 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B21'>
          card21
        </div>
      )}
      {p1_count > 2 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B22'>
          card22
        </div>
      )}
      {p1_count > 1 && (
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className='card B23'>
          card23
        </div>
      )}
      {p1_count > -1 && (
      <>{p1_count > 0 && (
        <div style={{ backgroundImage: `url(${background2})`,backgroundSize: "cover"}} className= "card B">
        </div>
        )}
        
      <ReactCardFlip flipDirection="verticle" isFlipped={isFlipped}>
        <div style={{ backgroundImage: `url(${face2[1]})`, backgroundSize: "cover" }} className="card BC">
        </div>
        <div style={{ backgroundImage: `url(${background2})`, backgroundSize: "cover" }} className="card B">
        </div>
      </ReactCardFlip>
      </>
      )}
    </div>
    </>
  )
}

export default App
