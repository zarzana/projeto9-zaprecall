import Title from "./Title";
import Cards from "./Cards";
import StatusBar from "./StatusBar";
import { useState } from "react";

function App() {

  const [statusNumber, setStatusNumber] = useState(0);

  const flashcards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "Expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  const [finishedCards, setFinishedCards] = useState(Array(flashcards.length).fill('unfinished'))

  return (
    <>
      <Title />
      <Cards flashcards={flashcards} setStatusNumber={setStatusNumber}
        finishedCards={finishedCards} setFinishedCards={setFinishedCards} />
      <StatusBar statusNumber={statusNumber} maxStatusNumber={flashcards.length} />
    </>
  )

}

export default App;
