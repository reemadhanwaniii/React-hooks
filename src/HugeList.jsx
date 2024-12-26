import { useDeferredValue, useEffect, useState } from "react";

function HugeList() {
    const [list,setList] = useState([]);
    const [input,setInput] = useState('');
   // const [isStateUpdating,startDelay] = useTransition();


   const deferInput = useDeferredValue(input);

    function handleChange(e) {
        const newValue = e.target.value;
        setInput(newValue);
        
    }

    useEffect(()=>{
            const newList = [];


            for(let i=0;i<10000;i++){
                newList.push(deferInput);
            }

            setList(newList);
    },[deferInput]);

    return(
        <>
            <input
                type="text"
                value={input}
                onChange={handleChange}
            />
                    <div>
                    {list.map((item,index)=>(
                        <div key={index}>{item}</div>
                    ))}
                    </div>
           
        </>
    )
}

export default HugeList;

//deferred value means slightly delayed value