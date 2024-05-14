import React, {useState, useMemo} from 'react';
//소수를 계산하는 함수
function calculatePrimes(limit) {
    console.log(`limit: ${limit}에 대한 소수 계산`)
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j<i; j++){
            if (i %j==0){
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    console.log("소수 연산 완료")
    return primes;
}
export default function PrimeCalculator(props) {
    const [limit, setLimit] = useState(10);
    const [count, setCount]=useState(0); //count state가 바뀌었다-> 다시그린다-> 함수를 다시 실행한다.
    //하지만 다시 함수를 실행할 필요가 없음 -> 낭비이기 때문에 결과적으로 보이는 값들은 같기 때문에 -> useMemo



    const primes=useMemo(()=>calculatePrimes(limit), [limit]);

    // const primes=useMemo(()=>{
    //     return calculatePrimes(limit)}, 
    //     [limit]);
    //limit이 바뀔 때문에 콜백함수의 리턴 값을 저장할거야
    //count state가 변경되면 함수를 다시 그리지 않고 건너뛸거야
    //성능 최적화를 하기위해 사용됨.
    // const primes = calculatePrimes(limit);


    //동작하는 방식은 같음 
    //useEffect의 리턴값: 콜백함수
    //useMemo의 리턴값: 리턴값을 리턴
    const addCount=()=>{
        setCount(count+1);
    }
    return (
        <div>
            {count}
            <button onClick={addCount}>카운트 증가</button>
            <input
                type="number"
                value={limit}
                onChange={(e)=>setLimit(Number(e.target.value))}
            />
            <p>계산된 소수: {primes.join(', ')}</p>
        </div>
    );
}