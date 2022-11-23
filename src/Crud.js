import React, { useEffect, useState } from 'react'





const Crud = () => {
const [crud1 , setCrud1]=useState([
    {
        id : 0,
        name : "Ajay"
    },
    {
        id : 1,
        name : "Raj"
    },
    {
        id : 2,
        name : "Santosh"
    }

])



    const handleDelete=(ind)=>{
        
        let newArr=crud1;
        let newArr2=newArr.filter( Element=>( ind!==Element.id ))
        setCrud1(newArr2);
        
    
    };

    const handleAdd=()=>{
        console.log("object")
        //let newArr=crud1;
        let newObj={
            id:crud1.length,
            name:"Sanjay"
        };
        
        //newArr.push(newObj);
        
        setCrud1([...crud1 , newObj])
        //console.log("dddd" , list)


    };
    console.log("objectdwse" , crud1)

    const handleEdit=()=>{

    }

    useEffect(()=>{} , []);
    return (<>
    <table>
    {crud1.map((Element , ind)=>(<tr key={Element.id}><td>{Element.name}</td>
    <td><button onClick={()=>handleEdit()}>Edit</button></td>
    <td><button onClick={()=>handleDelete(ind)}>Delete</button></td>
    </tr>))}
    </table>
    <button onClick={()=>handleAdd()}>Add</button>
    
    </>)
}

export default Crud;
