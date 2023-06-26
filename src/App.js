import React from 'react';
import './1.1~3.3/App.css';
import MyComponent from "./MyComponent";
import ClassComponent from "./ClassComponent";

function App() {
  const react = `리엑트`;
  const notReact = `뤼웩튜`;
  const temp = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  }
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
        {notReact === '리엑트' && <h1>리엑트입니다.</h1>}
      </div>

      <div style={temp}>
        {react}
      </div>

      <div className="react">{react}</div>

      <MyComponent name ="리엑트"></MyComponent>
      <MyComponent name ="이서율"></MyComponent>
      <MyComponent name ="문어"></MyComponent>
      <MyComponent></MyComponent>
      <MyComponent>유보거</MyComponent>
      {/*<MyComponent name = {3}></MyComponent>*/}

      <ClassComponent></ClassComponent>
      <ClassComponent name="주현명" age={18}></ClassComponent>
    </>
  );
}

export default App;
