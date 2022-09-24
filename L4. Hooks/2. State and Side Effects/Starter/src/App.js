import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [value1, setval1] = useState(null);
  const [value2, setval2] = useState(null);
  const [value3, setval3] = useState(null);
  const [proposedAnswer, setProposedAnswer] = useState(null);

  const [QuestionNum, setQuestionNum] = useState(0);
  const [answeredQuestionNum, setAnsweredQuestionNum] = useState(0);

  const makeNewQuistion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;

    return [value1, value2, value3, proposedAnswer];
  };

  useEffect(() => {
    let NewVal = makeNewQuistion();
    setval1(NewVal[0]);
    setval2(NewVal[1]);
    setval3(NewVal[2]);
    setProposedAnswer(NewVal[3]);
  }, []);

  const refresh = (newValuesArray) => {
    setval1(newValuesArray[0]);
    setval2(newValuesArray[1]);
    setval3(newValuesArray[2]);
    setProposedAnswer(newValuesArray[3]);
  };

  const AnswerHandle = (answerWasCorrect) => {
    if (answerWasCorrect) {
      setAnsweredQuestionNum(answeredQuestionNum + 1);
    }
    setQuestionNum(QuestionNum + 1);
  };

  const handleAnswer = (event) => {
    const NewValArray = makeNewQuistion();
    refresh(NewValArray);
    const answerWasCorrect = answerCheck(event.target.name);
    AnswerHandle(answerWasCorrect);
  };

  const answerCheck = (TheAnswer) => {
    const currAnswer = value1 + value2 + value3;

    return (
      (currAnswer === proposedAnswer && TheAnswer === 'true') ||
      (currAnswer !== proposedAnswer && TheAnswer === 'false')
    );
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>ReactND - Coding Practice</h1>
      </header>
      <div className='game'>
        <h2>Mental Math</h2>
        <div className='equation'>
          <p className='text'>{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button name='true' onClick={handleAnswer}>
          True
        </button>
        <button name='false' onClick={handleAnswer}>
          False
        </button>
        <p className='text'>
          Your Score: {answeredQuestionNum}/{QuestionNum}
        </p>
      </div>
    </div>
  );
};

export default App;
