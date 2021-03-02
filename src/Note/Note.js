import React, {Component } from 'react';
import './note.css';
import { ListItem, ListItemText, Button } from '@material-ui/core';
import { db } from  "../configuration/process";

export default function Note({todo, inprogress, id}) {

    function change() {

        db.collection("notes").doc(id).update({
            inprogress: !inprogress
        })

        
    }

    function remove() {
        db.collection("notes").doc(id).delete();
    }

    return ( 
        <div style ={{display:"flex"}}>
            <ListItem>
                <ListItemText primary={todo} secondary={inprogress ? "In Progress" : "Done"} />
            </ListItem>
             
             <Button onClick={change}> {inprogress ? "Done" : "Unone"} </Button>
             <Button onClick={remove}>Remove</Button>
        </div>
    );
}

