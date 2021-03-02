import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import '../App.css'
import { render } from 'react-dom';


export default function Quiz() {


  
  const qBank = [
    {
      question: "What is cloud computing?",
      answers: [
       { option: 'Checking if a computing surface is cloudy', isCorrect: false },
       { option: 'Server Virtualization', isCorrect: false },
       { option: 'Internet based computing', isCorrect: true },
      ]

    },
    {
      question: "What is private cloud?",
      answers: [
       { option: 'a private computer', isCorrect: false },
       { option: 'Clouds made for people', isCorrect: false },
       { option: 'Removes control over data and security concerns ', isCorrect: true },
       
      ]

    },
    {
      question: "What is public cloud?",
      answers: [
       { option: 'A cloud in a public space with end points of transmission', isCorrect: true },
       { option: 'Clouds in the sky ', isCorrect:false},
       { option: 'A place where you store clouds', isCorrect: false },
       
      ]

    },
    
    {
      question: "What is Hybrid cloud?",
      answers: [
       { option: 'Mix of private and public cloud', isCorrect: true },
       { option: 'Next generation cloud computing', isCorrect: false },
       { option: 'Mix between software engineering and electrical engineering', isCorrect: false },
       
      ]

    },

    {
      question: "What is IaaS",
      answers: [
       { option: 'Important application availiable structure', isCorrect: false },
       { option: 'Infrastructure as a Service', isCorrect: true },
       { option: 'Internet as a Service ', isCorrect: false },
       
      ]

    },

    {
      question: "What is SaaS",
      answers: [
       { option: 'Software as a Service', isCorrect: true },
       { option: 'Security Abstraction Application Software ', isCorrect: false },
       { option: 'Shopify as a Service ', isCorrect: false },
       
      ]

    },

    {
      question: "PaaS",
      answers: [
       { option: 'Pure Abstraction Activation Storage', isCorrect: false },
       { option: 'Platform as a Service', isCorrect: true },
       { option: 'Performace as a Service', isCorrect: false },
       
      ]

    },

  ]

  function reset() {
setCurrent(0);
setTotal(false);
setScore(0);
setEnd(false);
  }

function incrementQ(correct) {
let next = current + 1;
  if(next < qBank.length){
    setCurrent(current + 1);
    
  }
  else {
    setTotal(true);
  }

  if(correct)
  {
    setScore(score + 1)
  }
  else {
    setScore(score);
  }
}
const [current, setCurrent] = useState(0);
const [total, setTotal] = useState(false);
const [score, setScore] = useState(0);
const [end, setEnd] = useState(false);
	return (
		<div className='container'>

			{total ? (
				<div>You scored { score }  out of {qBank.length} <Button onClick={reset}style={{marginLeft:"1rem"}} variant="containedSecondary">RESET</Button></div>
      
        
			) : (
				<>
					<div>
						<div>
							Question {current + 1 }/{qBank.length}
						</div>
						<div className='text'>{ qBank[current].question }</div>
					</div>
					<div>
            { qBank[current].answers.map((answers) => <Button style={{margin:"1rem"}} variant="containedSecondary"  onClick={()=>incrementQ(answers.isCorrect)}>{answers.option}</Button>) }
			
					</div>
				</>
			)}



		</div>
	);
}
