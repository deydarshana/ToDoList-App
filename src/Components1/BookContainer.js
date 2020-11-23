import React from 'react';
import {connect} from 'react-redux';
import {buyBook} from '../redux1';

const BookContainer = (props) => {
    return(
        <>
        <div className="text-center">
        <h1>Number of Books - {props.numberOfBooks}</h1>
        <button className="btn btn-primary" onClick={props.buyBook}>Buy Book</button>
        </div>
        </>
    )

}
const mapStatetoProps = (state) => {
    return{
        numberOfBooks: state.numberOfBooks
    }
}
const mapDispatchtoProps = (dispatch) => {
     return{
         buyBook:function(){
             dispatch(buyBook());
         }
     }
}

export default connect(mapStatetoProps,mapDispatchtoProps) (BookContainer);
