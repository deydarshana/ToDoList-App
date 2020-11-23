import React, {useState} from 'react';
import TodoList1 from './TodoList1';

const Todolist = () => {

    const [inputList, setinputList] = useState("");

    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setinputList(event.target.value);
    }
    const listOfItems = () => {
        setItems((olditems) => {
            return [...olditems, inputList];
        })
        setinputList('');
    }
    
        const deleteItems = (id) => {
            console.log('deleted');

            setItems((olditems) => {
                return olditems.filter((arrElem, index) => {
                    return index !== id;
                })
            })
        }
   

    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent} />
                <button onClick={listOfItems}> + </button>

                <ol>
                    {/* <li>{inputList}</li> */}
                    {Items.map((itemval, index) => {
                        return  <TodoList1
                        key={index}
                        id={index}
                        onSelect={deleteItems}
                         text={itemval}/>
                        })}
                </ol>
            </div>
        </div>
        </>
    );

}

export default Todolist;