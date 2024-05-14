import React, {useEffect, useState} from "react";
//state관리가 component 상태의 관리
export default function BlinkComponent({text}){
    const [showText, setShowText]=useState(true);//비동기적으로 동작
//     //렌더링 이후 변수값 변경
//     setShowText(showText)
//     useEffect(()=>{
//         const timeoutId=setInterval(()=>{//ms마다 함수를 실행시킴.
//             setShowText(showText=>!showText);  //한번 등록하고 계속 사용 차이
//         },1000)
//         return ()=>{clearInterval(timeoutId)}
        

// }   ,[])
//     return (
//         <div>
//             {showText? text:null}
//         </div>
//     )
// }
// export default function BlinkComponent({ text }) {
//     const [showText, setShowText] = useState(true);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setShowText(!showText);
//         }, 1000); 
        
//         return () => clearInterval(intervalId); //useEffect 훅이 다음으로 실행되기 전에 실행됩니다. 이 cleanup 함수는 이전에 설정한 타이머를 클리어하여 메모리 누수를 방지하고, 새로운 타이머가 설정되기 전에 이전 타이머를 제거합니다.
//     }, [showText]); 

//     return (
//         <div>
//             {showText && text} 
//         </div>
//     );
// }
useEffect(()=>{
    const intervalId = setInterval(()=>{ //1.이 함수로 만들어진 시점에 상수로 true가 들어가기 때문에
        console.log("호출");
        setShowText(!showText); //2. 계속 false로 바꾸고 있음. 
    }, 3000);
    return ()=>{clearInterval(intervalId);} //3. 해제 다시 등록(dependency에 의해)
}, [showText]);
} // 해제하고 다시 등록하느냐의 차이
