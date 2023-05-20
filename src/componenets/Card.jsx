import { useState } from "react";
import styled from "styled-components";
import playButton from "../assets/seta_play.png";
import flipButton from "../assets/seta_virar.png";
import iconCorrect from "../assets/icone_certo.png";
import iconWrong from "../assets/icone_erro.png";
import iconPartial from "../assets/icone_quase.png";

function Card(props) {

  const statusNumber = props.statusNumber;
  const setStatusNumber = props.setStatusNumber;

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

  const [cardStatus, setCardStatus] = useState('closed');

  const [answerStatus, setAnswerStatus] = useState(undefined);

  const CardStyle = styled.div`

    width: 300px;
    height: ${['closed', 'finished'].includes(cardStatus) ? '65px' : '150px'};

    background: ${['closed', 'finished'].includes(cardStatus) ? '#FFFFFF' : '#FFFFD5'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    margin-bottom: 25px;

    #cardContentDiv {

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
        margin-top: 100px;
      }

      #answerIcon {
        display: ${['finished'].includes(cardStatus) ? 'block' : 'none'};
        width: 23px;
        height: 23px;
      }
    
    }

    #flippedButtonsDiv {

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

        #noButton {
          background: #FF3030;
        }

        #partialButton {
          background: #FF922E;
        }

        #zapButton {
          background: #2FBE34;
        }

    }

`;

  const playClick = () => {

    setCardStatus('opened');

  };

  const flipClick = () => {

    setCardStatus('flipped');

  };

  const answerClick = (event) => {

    switch (event.target.id) {
      case 'noButton':
        setAnswerStatus(0);
        break;
      case 'partialButton':
        setAnswerStatus(1);
        break;
      case 'zapButton':
        setAnswerStatus(2);
        break;
    }

    setCardStatus('finished');
    setStatusNumber(statusNumber + 1);

  };

  return (
    <CardStyle data-test="flashcard">
      <div id='cardContentDiv'>
        <h2 data-test="flashcard-text">{cardText[cardStatus]}</h2>
        <img id='playButton' src={playButton} onClick={playClick} data-test="play-btn"></img>
        <img id='flipButton' src={flipButton} onClick={flipClick} data-test="turn-btn"></img>
        <img id='answerIcon' src={answerStatusImages[answerStatus]} data-test={answerStatusDataTests[answerStatus]}></img>
      </div>
      <div id='flippedButtonsDiv'>
        <button id='noButton' onClick={answerClick} data-test="no-btn">Não lembrei</button>
        <button id='partialButton' onClick={answerClick} data-test="partial-btn">Quase não lembrei</button>
        <button id='zapButton' onClick={answerClick} data-test="zap-btn">Zap!</button>
      </div>
    </CardStyle>
  )

}

export default Card;
