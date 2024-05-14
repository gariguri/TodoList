//import React, {useCallback, useEffect, useState, } from "react";
//export default function CountComponent(){
    // const [count, setCount]=useState(0)
    // const addCount=()=>{
    //     setCount(count+1);
    // }

    // useEffect(()=>{
    //     console.log("데이터 받아오기! 이 함수는 한번만 실행됩니다.");
    //     return ()=>{
    //         console.log("메모리를 잡아먹으면 리소스 해제 하는 함수로 return해 주어야 합니다.")
    //         //useeffectreturn 함수: 컴포넌트가 없어질때, 함수가 실행이 다시 될때 실행됨.
    //         //리소스가 해제되고 새로운 실행이 등록됨.
    //     }
    // },[])


    // useEffect(()=>{
    //     console.log(`카운트가 증가할때마다 실행!\n -count:${count}`);
    //     return ()=>{
    //         console.log("그럼")}
    // },[count])

    // return (
    //     <div>
    //         <div>{count}</div>
    //         <button onClick={addCount}>1증가</button>
    //     </div>
    // )
   
//}
import React, {useCallback, useEffect, useState, } from 'react';
//dependency array가 변경되면 콜백 함수 자체를 반환
export default function CountComponent(){
    const [count, setCount] = useState(0);
    const [value1, setValue1] = useState(true);

    const ChangeValue = ()=>{
        setValue1((v)=>!v);
    }

    // const addCount = ()=>{
    //     setCount(count+1);
    // }

    const addCount=useCallback(()=>{
        setCount(count+1);
    }, []) //빈값 새로 정의하지 않겠다 처음 로드 될때만 0->1
    //값이 있으면 새로 정의하겠다.

    useEffect(()=>{
        console.log("데이터 받아오기! 이 함수는 한 번 호출됩니다.");
        return ()=>{
            console.log("메모리를 잡아 먹으면 리소스를 해제하는 함수를 return 해주셔야 합니다.");
        }
    }, []);
    

    useEffect(()=>{
        console.log(`카운트가 증가될 때마다 실행됩니다. \n - count: ${count}`);
        return ()=>{
            console.log("기존 uesEffect에서 사용한 것들을 반환합니다.", count)
        }
    }, [count]);



    // useEffect(FunctionA, [dependency])
    // let A = FunctionA()
    // if (dependency is changed){
    //     A();
    //     A = FunctionA()
    // }
    // A();
    // A= FunctionA();

    return (
        <div>
            <div>
                <div>{value1}</div>
                <button onClick={ChangeValue}>State변경</button>
            </div>

            <div>
                <div>{count}</div>
                <button onClick={addCount}>1 증가</button>
            </div>
        </div>
    )
}
