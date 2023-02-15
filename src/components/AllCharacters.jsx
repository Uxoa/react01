
import './App.css';
import React,{useState, useEffect} from 'react'

function AllCharacters() {

const[characters, setCharacters]= useState([])

useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then((res)=>res.json())
    .then((data)=>setCharacters(data.results))

},[])


    return (
        <div>AllCharacters</div>
    )
}

export default AllCharacters
