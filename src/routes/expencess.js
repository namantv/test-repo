import React from 'react';
import { useSelector,useDispatch } from "react-redux";

const Expencess = () => {
    const dispatch = useDispatch()

    const up =()=>{
        dispatch({type:"inc",payload:"pass in payload"})
    }

    const down =()=>{
        dispatch({type:"dec"})
    }
    const storeStateTolocal = useSelector((state) => state.counter);
    return (
        <div>
            My State : {storeStateTolocal}
            expencess
            <button type='button' onClick={()=>up()}>up</button>
            <button type='button' onClick={()=>down()}>down</button>

        </div>
    );
}

export default Expencess;
