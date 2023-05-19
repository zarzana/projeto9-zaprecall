import styled from "styled-components";
import Card from "./Card";
import Title from "./Title";

function Content() {

  const ContentStyle = styled.div`

    width: 300px;
    margin: auto;

  `;

  return (
    <ContentStyle>
      <Title />
      <Card />
    </ContentStyle>
  )

}

export default Content;
