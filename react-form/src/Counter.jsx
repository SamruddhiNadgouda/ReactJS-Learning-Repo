import { useEffect, useState } from "react";

export default function Counter(){
    let [ countx, setCountx ] = useState(0);
    let [ county, setCounty ] = useState(0);

    function incCountx(){
        setCountx((currCount) => currCount+1);
        // console.log(count);
    };
    function incCounty(){
        setCounty((currCount) => currCount+1);
        // console.log(count);
    };

    useEffect(function sideEffect(){
        console.log("This is a side effect!");
    }, [countx]);

    return(
        <div>
            <h3>Countx = {countx}</h3>
            <button onClick={incCountx} style={{backgroundColor: "lightblue"}}>+1</button>
            <h3>County = {county}</h3>
            <button onClick={incCounty} style={{backgroundColor: "lightblue"}}>+1</button>
        </div>
    );
}