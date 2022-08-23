import { useState, useEffect } from 'react';

export default function Exam5() {
    const [ counter, setCounter ] = useState(0);
    const [ keyword, setKeyword ] = useState('');

    const countUp = () => {
        setCounter(counter => counter + 1)
    }
    const countDown = () => {
        setCounter(counter => counter > 0 ? counter - 1 : 0 )
    }
    const changeText = (e) => {
        setKeyword(e.target.value);
    }

    useEffect(() => {
        if(keyword.length > 5) {    //조건식도 가능
            console.log('AAA'); 
        }
    }, [keyword]); //[] <= 아무것도 안주면 한번만 실행 됨, [keyword] <= 키워드 바뀔 때 마다 실행

    return (
        <div>
            <input 
                type="text" 
                placeholder='Search here...' 
                value={ keyword }
                onChange={ changeText }
            />
            <h1>{ counter }</h1>
            <button onClick={ countUp }>+</button>
            <button onClick={ countDown }>-</button>
        </div>
    )
}