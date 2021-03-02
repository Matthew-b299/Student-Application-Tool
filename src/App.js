import React from 'react';
import './App.css';
import Form from './Form/Form'
import Quiz from './Service2/quiz'
import 'firebase/database'
import Quote from './Service3/quote'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';


  function App (){
  return (
  
   

    <div>
    <Router>

    <div>
    <div className="heading">Student Application Tool</div>
    </div>

    <Switch>
     <Route path = "/Quote" component={Quote}/>
     <Route path = "/Form" component={Form} />
     <Route path = "/Quiz" component={Quiz} />
     </Switch>

    <Link to = '/Quote'>
     Dictonary  
          </Link>


  <Link to = '/Form'>
   Text
 </Link>


 <Link to = '/Quiz'>
 
   Quiz


 </Link>
    
    <div className = "footer">
      
    </div>


<div>

</div>
</Router>

    </div>
  );
}


export default App;
