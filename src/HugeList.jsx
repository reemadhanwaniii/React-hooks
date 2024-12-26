import { useState, useTransition } from "react";

function HugeList() {
    const [list,setList] = useState([]);
    const [input,setInput] = useState('');
    const [isStateUpdating,startDelay] = useTransition();


    function handleChange(e) {
        const newValue = e.target.value;
        setInput(newValue);
        const newList = [];

        startDelay(()=>{
            //less imp update
            for(let i=0;i<1000;i++){
                newList.push(newValue);
            }

            setList(newList);
        })
        
       
    }

    return(
        <>
            <input
                type="text"
                value={input}
                onChange={handleChange}
            />
            {(isStateUpdating)?<div>Loading.....</div>:
                (
                    <div>
                    {list.map((item,index)=>(
                        <div key={index}>{item}</div>
                    ))}
                    </div>
                )
            }
           
        </>
    )
}

export default HugeList;