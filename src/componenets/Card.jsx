import { useState } from "react";
import styled from "styled-components";
import playButton from "../assets/seta_play.png";
import flipButton from "../assets/seta_virar.png";

function Card(props) {

  const cardNumber = props.index + 1;
  const question = props.question;
  const answer = props.answer;

  const [cardStatus, setCardStatus] = useState('closed');
  const [cardText, setCardText] = useState(cardNumber);

  const CardStyle = styled.div`

  width: 300px;
  height: ${['closed', 'finished'].includes(cardStatus) ? '65px' : '130px'};

  background: ${['closed', 'finished'].includes(cardStatus) ? '#FFFFFF' : '#FFFFD5'};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  margin-bottom: 25px;

  div {

    position: relative;
    height: 65px;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: ${['closed', 'finished'].includes(cardStatus) ? 'center' : 'none'};
    padding-top: ${['closed', 'finished'].includes(cardStatus) ? '0' : '18px'};

    h2 {
      font-family: 'Recursive';
      font-weight: ${['closed', 'finished'].includes(cardStatus) ? '700' : '400'};
      font-size: ${['closed', 'finished'].includes(cardStatus) ? '16px' : '18px'};
      line-height: ${['closed', 'finished'].includes(cardStatus) ? '19px' : '22px'};
      color: #333333;
    }

    #playButton {
      display: ${['closed'].includes(cardStatus) ? 'block' : 'none'};
      width: 20px;
      height: 23px;
    }

    #flipButton {
      display: ${['opened'].includes(cardStatus) ? 'block' : 'none'};
      position: absolute;
      width: 30px;
      height: 20px;
      right: 0;
      margin-top: 82px;
    }
  
  }

`;

  const cardClick = () => {

    setCardStatus('opened');
    setCardText(question);

  };

  return (
    <CardStyle data-test="flashcard">
      <div>
        <h2 data-test="flashcard-text">Pergunta {cardText}</h2>
        <img id='playButton' src={playButton} onClick={cardClick} data-test="play-btn"></img>
        <img id='flipButton' src={flipButton} data-test="turn-btn"></img>
      </div>
    </CardStyle>
  )

}

export default Card;
