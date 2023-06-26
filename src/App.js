import logo from './logo.svg';
import './App.css';

function App() {
  const react = `리엑트`
  const notReact = `뤼웩튜`
  return (
    <>
      <div>
        <h1>{react} 안녕?</h1>
        <h1>뒤졌니?</h1>
        <br/>
      </div>

      <div>
        {react === `리엑트` ? (
            <h1>리엑트입니다.</h1>
        ) : (
            <h1>리엑트가 아닙니다.</h1>
        )}
        {notReact === `리엑트` ? (
            <h1>리엑트입니다.</h1>
        ) : (
            <h1>리엑트가 아닙니다.</h1>
        )}
      </div>
    </>
  );
}

export default App;
