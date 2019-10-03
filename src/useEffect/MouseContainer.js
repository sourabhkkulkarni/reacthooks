import React,{useState} from 'react'
import HookMouse from './HookMouse';

const MouseContainer = () => {
    const [display,setDisplay]  = useState(true);
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />} 
            {/* implemeting "componentWillUnmount",we nned to cancle all the "subscription" and "listeners" after unmounting i.e. "cleanup" */}
        </div>
    )
}

export default MouseContainer;
