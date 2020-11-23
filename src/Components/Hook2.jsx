import React, {useState} from 'react'

const Hook2 = () => {

    const [name, setName] = useState({firstName:'', lastName:''})
   return(
       <div>
       <form>
           <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName:e.target.value})}></input>
           <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName:e.target.value})}></input>
           <h2>Your First Name is : {name.firstName}</h2>
           <h2>Your Last Name is : {name.lastName}</h2>
           <h2>{JSON.stringify(name)}</h2>
       </form>

       </div>
   )
}

export default Hook2