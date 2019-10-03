import React ,{useState,useEffect}from 'react'

const HookMouse = () => {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const logMousePosition = e =>{
        console.log("Mouse Move");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("UseEffect called");
        window.addEventListener('mousemove',logMousePosition)
    },[]); // empty [],means doesnt depend on any props or state,so there is no reason to call this effect on re-renders
    return (
        <div>
            Hooks : X - {x} Y - {y}
        </div>
    )
}

export default HookMouse;
