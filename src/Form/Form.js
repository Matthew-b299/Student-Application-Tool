import React, {Component, useEffect, useState } from 'react';
import { db } from  "../configuration/process";
import './form.css';
import '../App.css';
import Message from '../Form/message'
import Note from '../Note/Note';

    function Form () {
        const [todoInput, setTodoInput] = useState("");
        const [list, setList] = useState([]);

        useEffect(() => {
            fetchList();
        }, []);
        
        function fetchList() {
            db.collection("notes").onSnapshot(function (snapShot) {
               setList(
                snapShot.docs.map((doc) => ({
                    id: doc.id,
                    todo: doc.data().todo,
                    inprogress: doc.data().inprogress
                }))
               );

            })
        }

        function add(e){
            let note = "You have added " + todoInput + " to your to do list"
            e.preventDefault();
           
            db.collection("notes").add({
                inprogress: true,
                todo: todoInput,
            });

            

            fetch(`http://127.0.0.1:4000/send-text?recipient=+16479954054&textmessage=${note}`)
            .catch(err => console.error(err))

           
        }

        return (
            <div>

            <div>
            {list.map((todo) => (
                
              
                <div className="theList">
               < Note todo={todo.todo} 
                    inprogress={todo.inprogress}
                    id = {todo.id}  />
                </div>
               
            ))

            }

            <input placeholder="Write Something" style= {{marginLeft: "500px"}} onChange={(e) => {setTodoInput(e.target.value)}}/>
            <button onClick ={add}> Add Note</button>

            </div>
            <div> 
            
            </div>


            </div>

           
        )
    }


export default Form;