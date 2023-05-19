import styled from "styled-components";
import playArrow from "../assets/seta_play.png";

function Card(props) {

  const CardSyle = styled.div`

  width: 300px;
  height: 65px;

  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  margin-bottom: 25px;

  div {
    height: 65px;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }

  img {
    width: 20px;
    height: 23px;
  }

`;

  const cardNumber = props.index + 1;
  const question = props.question;
  const answer = props.answer;

  return (
    <CardSyle>
      <div>
        <h2>Pergunta {cardNumber}</h2>
        <img src={playArrow}></img>
      </div>
    </CardSyle>
  )

}

export default Card;
