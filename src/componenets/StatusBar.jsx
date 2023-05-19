import styled from "styled-components";

function StatusBar() {

  const StatusBarStyle = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    p {
      font-size: 18px;
      line-height: 22px;
      color: #333333;
    }

  `;

  return (
    <StatusBarStyle>
      <p>0/4 CONCLUÍDOS</p>
    </StatusBarStyle>
  )

}

export default StatusBar;