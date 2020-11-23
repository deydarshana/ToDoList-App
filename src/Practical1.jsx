import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Practical1 = () => {

    const notify = () => {
        toast('Basic Notification',{position: toast.POSITION.TOP_LEFT})
        toast.success('success notification', {position: toast.POSITION.TOP_RIGHT})
        
        toast('Basic Notification',{position: toast.POSITION.TOP_CENTER})
        toast('Basic Notification',{position: toast.POSITION.TOP_RIGHT})
        toast('Basic Notification',{position: toast.POSITION.BOTTOM_LEFT})
        toast('Basic Notification',{position: toast.POSITION.BOTTOM_CENTER})
        toast('Basic Notification',{position: toast.POSITION.BOTTOM_RIGHT})
    }

    return(
        <>
        <div class="text-center">
        <button onClick={notify} className="btn btn-primary">Notify</button>
        </div>
        </>
    );

}

export default Practical1;

