import { useState } from "react";
import styled from "styled-components";
import playButton from "../assets/seta_play.png";
import flipButton from "../assets/seta_virar.png";
import iconCorrect from "../assets/icone_certo.png";
import iconWrong from "../assets/icone_erro.png";
import iconPartial from "../assets/icone_quase.png";

function Card(props) {

  const setStatusNumber = props.setStatusNumber;
  const finishedCards = props.finishedCards;
  const setFinishedCards = props.setFinishedCards;
  const finishedStatus = finishedCards[props.index];

  const cardActivity = props.cardActivity;
  const setCardActivity = props.setCardActivity;

  let initialCardStatus;
  switch (finishedStatus) {
    case 'unfinished':
      initialCardStatus = 'closed'
      break;
    case 'opened':
      initialCardStatus = 'opened'
      break;
    default:
      initialCardStatus = 'finished';
      break;
  }

  const [answerStatus, setAnswerStatus] = useState(finishedStatus);
  const [cardStatus, setCardStatus] = useState(initialCardStatus);

  const cardStatusColors = {
    'unfinished': '#333333',
    0: '#FF3030',
    1: '#FF922E',
    2: '#2FBE34',
  };

  const cardText = {
    'closed': 'Pergunta ' + (props.index + 1),
    'opened': props.question,
    'flipped': props.answer,
    'finished': 'Pergunta ' + (props.index + 1)
  }

  const answerStatusImages = {
    0: iconWrong,
    1: iconPartial,
    2: iconCorrect
  }

  const answerStatusDataTests = {
    0: "no-icon",
    1: "partial-icon",
    2: "zap-icon"
  }

  const CardStyle = styled.div`

    width: 300px;
    height: ${['closed', 'finished'].includes(cardStatus) ? '65px' : '150px'};

    background: ${['closed', 'finished'].includes(cardStatus) ? '#FFFFFF' : '#FFFFD5'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    margin-bottom: 25px;

    [style_id= "cardContentDiv"] {

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
        color: ${cardStatusColors[answerStatus]};
        text-decoration: ${['finished'].includes(cardStatus) ? 'line-through' : 'none'};
      }

      [style_id= "playButton"] {
        display: ${['closed'].includes(cardStatus) ? 'block' : 'none'};
        width: 20px;
        height: 23px;
      }

      [style_id= "flipButton"] {
        display: ${['opened'].includes(cardStatus) ? 'block' : 'none'};
        position: absolute;
        width: 30px;
        height: 20px;
        right: 0;
        margin-top: 100px;
      }

      [style_id= "answerIcon"] {
        display: ${['finished'].includes(cardStatus) ? 'block' : 'none'};
        width: 23px;
        height: 23px;
      }
    
    }

    [style_id= "flippedButtonsDiv"] {

        display: ${['flipped'].includes(cardStatus) ? 'flex' : 'none'};
        justify-content: space-between;
        margin: auto;
        width: 90%;
        margin-top: 15px;

        button {
          width: 85px;
          height: 37px;

          border-radius: 5px;

          font-family: 'Recursive';
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          color: white;
          text-align: center;
        }

        [style_id= "noButton"] {
          background: #FF3030;
        }

        [style_id= "partialButton"] {
          background: #FF922E;
        }

        [style_id= "zapButton"] {
          background: #2FBE34;
        }

    }

`;

  const playClick = () => {

    if (!cardActivity) {
      setCardActivity(true);
      setCardStatus('opened');
      let updatedFinishedCards = [...finishedCards];
      updatedFinishedCards[props.index] = 'opened';
      setFinishedCards(updatedFinishedCards)
    }

  };

  const flipClick = () => {

    setCardStatus('flipped');

  };

  const answerClick = (event) => {

    let status;

    switch (event.target.getAttribute("style_id")) {
      case 'noButton':
        status = 0;
        break;
      case 'partialButton':
        status = 1;
        break;
      case 'zapButton':
        status = 2;
        break;
    }

    setCardStatus('finished');
    let updatedFinishedCards = [...finishedCards];
    updatedFinishedCards[props.index] = status;
    setFinishedCards(updatedFinishedCards);
    setAnswerStatus(status);
    setCardActivity(false);
    setStatusNumber(prevStatusNumber => prevStatusNumber + 1);

  };

  return (
    <CardStyle data-test="flashcard">
      <div style_id='cardContentDiv'>
        <h2 data-test="flashcard-text">{cardText[cardStatus]}</h2>
        <img style_id='playButton' src={playButton} onClick={playClick} data-test="play-btn"></img>
        <img style_id='flipButton' src={flipButton} onClick={flipClick} data-test="turn-btn"></img>
        <img style_id='answerIcon' src={answerStatusImages[answerStatus]} data-test={answerStatusDataTests[answerStatus]}></img>
      </div>
      <div style_id='flippedButtonsDiv'>
        <button style_id='noButton' onClick={answerClick} data-test="no-btn">Não lembrei</button>
        <button style_id='partialButton' onClick={answerClick} data-test="partial-btn">Quase não lembrei</button>
        <button style_id='zapButton' onClick={answerClick} data-test="zap-btn">Zap!</button>
      </div>
    </CardStyle>
  )

}

export default Card;
