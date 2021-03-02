import { Component, useState} from 'react';
import React from 'react';
import axios from 'axios'
import './quote.css'
import '../App.css'
function App() {

    const [word, setWord] = useState();
    const [def,setDef] = useState();

   function change(e) {

    setWord(e.target.value)

    console.log(word)

}
     function fetch ()
    {
     
     axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`)
        .then((response) => {
            const { definition } = response.data[0].meanings[0].definitions[0]
            setDef(definition)
            console.log(definition)
        })
        .catch((error) =>{
            console.log(error)
        })
}       

      return (
        <div>
          <div>  
        <h1> Dictonary </h1>
        </div>
        <h1> <div className="box">  {def } </div> </h1>
        <h1>Enter a word:</h1>
        <input type="text" onChange={change}/>
        <button className="button" onClick={fetch}>Define</button>
          
      </div>
      );
}
  
  
  export default App;