import React, {useState} from 'react';

const Usestate = () => {

const [count, setCount] = useState(0);

const [name, setName] = useState("");

const [fullName, setFullname] = useState();

const onSubmit = () => {
  setFullname(name);
}

const IncNum = () =>{
  setCount(count+1);
}

const inputEvent = (e) => {
  console.log(e.target.value);
  setName(e.target.value);
}

  return(
    <div>
       <h1>Hello {fullName}</h1>
       <h1>{count}</h1>
       <button onClick={IncNum}>Click Me</button>
       <input type="text" onChange={inputEvent} value={name} />
       <button onClick={onSubmit}>Send</button>
    </div>
  );
}

export default Usestate;