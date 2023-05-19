import styled from "styled-components";
import Card from "./Card";

function Cards() {

  const CardsStyle = styled.div`

    width: 300px;
    margin: auto;

  `;

  return (
    <CardsStyle>
      <Card />
    </CardsStyle>
  )

}

export default Cards;
