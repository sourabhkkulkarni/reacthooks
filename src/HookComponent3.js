import React,{useState} from 'react'

const HookComponent3 = () => {
    // state variable can be string,number,object,array,boolean..her ewe are using object
    const [name,setName]=useState({firstName:'',lastName:''});
    return (
        <div>
            <form>
                <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                value={name.firstName}
                onChange={e => setName({...name,firstName:e.target.value})}
                // spread operator -- copy every property in the name object and override "firstname" field with different value
                />
                <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                value={name.lastName}
                onChange={e => setName({...name,lastName:e.target.value})}
                />
                <h2>Your first name is : {name.firstName}</h2>
                <h2>Your last name is : {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2> 
                {/* "useState" does not automatically merge and update the object,thats why properties dissapeares from state variable
                    "setState" will merge the object ..this is the difference between "useState(functional component) and setState(Class component)"
                */}
            </form>
        </div>
    )
}

export default HookComponent3;
