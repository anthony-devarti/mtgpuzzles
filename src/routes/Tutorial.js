import QuestionCard from "../components/QuestionCard"
import { example } from '../appConstants'

export default function Tutorial(){
    
    return (
        <>
        <QuestionCard 
            question={example}
        />
        </>
    )
}