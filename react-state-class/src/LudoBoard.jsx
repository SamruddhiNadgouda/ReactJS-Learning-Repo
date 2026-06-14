import { useState } from "react";

export default function LudoBoard() {
    //update object in state
    // let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    // let updateBlue = () =>{
    //     console.log(`moves.blue = ${moves.blue}`);
    //     setMoves((prevMoves) =>{
    //         return {...prevMoves, blue: prevMoves.blue + 1}
    //     });
    // }

    //update Array in state
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});
    let [arr, setArr] = useState(["no moves"]);

    let updateBlue = () =>{
        // console.log(`moves.blue = ${moves.blue}`);
        // setMoves((prevMoves) =>{
        //     return {...prevMoves, blue: prevMoves.blue + 1}
        // });

        // arr.push("blue moves");
        setArr((prevArr) =>{
            return [...prevArr, "blue moves"];
        });
        console.log(arr);
    }
    
    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>
                +1
                </button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}}>+1</button>
            </div>

        </div>
    );
}