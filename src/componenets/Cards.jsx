import styled from "styled-components";
import Card from "./Card";

function Cards(props) {

  const CardsStyle = styled.div`

    width: 300px;
    margin: auto;
    margin-bottom: 100px;

  `;

  const flashcards = props.flashcards;

  return (
    <CardsStyle>

      {flashcards.map((flashcard, index) =>
        <Card key={index} index={index} question={flashcard.question} answer={flashcard.answer}
          setStatusNumber={props.setStatusNumber}
          finishedCards={props.finishedCards} setFinishedCards={props.setFinishedCards} />)}

    </CardsStyle>
  )

}

export default Cards;
