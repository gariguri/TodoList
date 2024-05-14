import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import CaptionImage from "./components/CationImage";
import BlinkComponent from "./components/BlinkComponent";
import CBlinkComponent from "./components/CBlinkComponent";
import CountComponent from "./components/CountComponent";
import FocusInputButton from "./components/FocusInputButton";
import PrimeCalculator from "./components/PrimeCalculator";
import TodoApp from "./components/TodoApp";
import { TodoProvider } from "./components/Todolist_uc/TodoProvider";

import TodoApp1 from "./components/Todolist_uc/TodoApp1";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import MyPage from "./components/MyPage";
//import { ThemeProvider } from './components/ThemeProvider';
//import ThemeButton from './components/ThemeButton';
//import MyPage from './components/MyPage';
//import "bootstrap/dist/css/bootstrap.min.css";
//import Button from 'react-bootstrap/Button';
function App() {
  // const [showCount, setShowCount]=useState(true);
  // return(
  //   <div className='App'>
  //     <button onClick={e=>{
  //       setShowCount(!showCount);
  //     }}>버튼</button>
  //     {showCount ? <CountComponent />: null}
  //   </div>
  // )
  return (
    <TodoProvider>
      <div className="App">
        {/* <FocusInputButton></FocusInputButton> */}
        <TodoApp1></TodoApp1>
        {/* <ThemeProvider >
          <div>ThemeProvider에 children으로 전달됩니다.</div> 
           <ThemeButton></ThemeButton>
           <MyPage></MyPage>
         </ThemeProvider>   */}
      </div>
    </TodoProvider>
  );
}
// const myName="김가언";
// return (
//   <div className="App">
//         {/* Hello {myName} */}
//         {/* Edit <code>src/App.js</code> and save to reload. */}
//         {/* <HelloWorld></HelloWorld> */}
//         {/* <CaptionImage imgUrl="https://tse1.mm.bing.net/th?id=OIP.fPr9GXXZRaknN1xUNotw2QHaD4&pid=Api&P=0&h=220" caption="이건 트럭입니다."></CaptionImage>
//         <BlinkComponent text="바보"></BlinkComponent>
//         <CBlinkComponent text="컴포넌트형 입니다."></CBlinkComponent> */}
// <CountComponent></CountComponent>

//     </div>
//   );
// }

export default App;
