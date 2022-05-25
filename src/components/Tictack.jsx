import React from "react";
import Box from "./Box";
import "./Ticktack.css"

const initial = ["", "", "", "", "", "","", "", ""];

const Tictack = () => {
    const [data, setData] = React.useState(initial)
    const [Xchance, setXchance] = React.useState(false)

    const change = (index) => {
        let strings = Array.from(data);
        strings[index] = !Xchance ? "X" : "O"
        setData(strings);
        setXchance(!Xchance);
        
        if(strings[0] == "X" && strings[1] == "X" && strings[2] == "X" || 
           strings[3] == "X" && strings[4] == "X" && strings[5] == "X" ||
           strings[6] == "X" && strings[7] == "X" && strings[8] == "X" ||
           strings[0] == "X" && strings[4] == "X" && strings[8] == "X" ||
           strings[0] == "X" && strings[3] == "X" && strings[6] == "X" ||
           strings[1] == "X" && strings[4] == "X" && strings[7] == "X" ||
           strings[2] == "X" && strings[5] == "X" && strings[8] == "X" ||
           strings[2] == "X" && strings[4] == "X" && strings[6] == "X"){
            alert("Ta da X is winner");
        }else 
        if(
            strings[0] == "O" && strings[1] == "O" && strings[2] == "O" || 
           strings[3] == "O" && strings[4] == "O" && strings[5] == "O" ||
           strings[6] == "O" && strings[7] == "O" && strings[8] == "O" ||
           strings[0] == "O" && strings[4] == "O" && strings[8] == "O" ||
           strings[0] == "O" && strings[3] == "O" && strings[6] == "O" ||
           strings[1] == "O" && strings[4] == "O" && strings[7] == "O" ||
           strings[2] == "O" && strings[5] == "O" && strings[8] == "O" ||
           strings[2] == "O" && strings[4] == "O" && strings[6] == "O"){
            alert("Ta da! O is winner");
        };
    }


  return (
    <div className="container">

      <p class="heading">Tick Tack Toe</p>

      <div className="row1">
        <Box className="box0" data={data[0]}  onClick={() => change(0)} />
        <Box className="box0" data={data[1]} onClick={() => (change(1))}/>
        <Box className="box2" data={data[2]} onClick={() => (change(2))}/>
      </div>

      <div className="row1">
        <Box className="box0" data={data[3]} onClick={() => (change(3))}/>
        <Box className="box0" data={data[4]} onClick={() => (change(4))}/>
        <Box className="box5" data={data[5]} onClick={() => (change(5))}/>
      </div>

      <div className="row1">
        <Box className="box6" data={data[6]} onClick={() => (change(6))}/>
        <Box className="box7" data={data[7]} onClick={() => (change(7))}/>
        <Box className="box8" data={data[8]} onClick={() => (change(8))}/>
      </div>

      <button className="btn" onClick={() => (setData(initial))} >Reset</button>
    </div>
  );
};

export default Tictack;
