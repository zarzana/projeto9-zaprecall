import styled from "styled-components";

function Title() {

  const TitleSyle = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;

    img {
      width: 52px;
      height: 60px;
    }

    h1 {
      margin-top: 6px;
      margin-left: 20px;

      font-family: 'Righteous';
      font-size: 36px;
      line-height: 45px;
      letter-spacing: -0.012em;

      color: #FFFFFF;

      transform: rotate(0.58deg);
    }

`;

  return (
    <TitleSyle>
      <img src="./assets/logo.png"></img>
      <h1>ZapRecall</h1>
    </TitleSyle>
  )

}

export default Title;
