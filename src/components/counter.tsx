import { useState } from 'react';

interface CounterProps {
    startCount: number
}

// property : attribute dalam component yang kita gunakan untuk 
// mengirimkan data ke parameter component dalam bentuk object

function Counter({ startCount }: CounterProps){
    // state : tempat kita menyimpan data di react, ketika kita mengubah state
    // maka akan mentrigger yang namanya render

    let [count, setCount] = useState(startCount)
    
    const incrementHandler = () => {
        setCount(count + 1)
    }

    const multiHandler = () => {
        setCount(count * 10)
    }

    return (
        <div>
            <button onClick={incrementHandler}>
                count is {count}
            </button>
            <button onClick={multiHandler}>
                count * 10 is {count}
            </button>
        </div>
    )
}

export default Counter;