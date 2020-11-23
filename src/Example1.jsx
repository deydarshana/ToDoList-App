import React, {useState, useEffect} from 'react';

const Example1 = () => {

    const [num, setNum] = useState(0);
    useEffect(() => {
        document.title = `you clicked me ${num} times`;
    })
    return(
        <div>
          <button onClick={() => {setNum(num+1)}}>Click me {num}</button>

        </div>
    );
}

export default Example1;