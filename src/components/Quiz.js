/*
The Quiz Component will display a collection of questions, sequentially.  
*/
import { useState } from "react"
import QuestionCard from "./QuestionCard"
import { exampleQuiz } from "../appConstants"
import { Button } from 'react-bootstrap'

export default function Quiz(){

    const [ current, setCurrent ] = useState(0)

    console.log(exampleQuiz[0])

    return (
        <div className="quiz">
            <QuestionCard question={exampleQuiz[current]}/>
            {current > 0 && 
            <Button onClick={() => setCurrent(current - 1 )}>Prev</Button>
            }
            <Button onClick={() => setCurrent(current + 1)}>Next</Button>
        </div>
    )
}