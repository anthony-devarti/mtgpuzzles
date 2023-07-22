/*
answerCheck function exists as a standalone way to check a user's answer.  Iteration one is simple multiple choice.
This is intentionally very simple and stupid, since it it likely going to need to get more and more complex as question types expand.


*/

export default function answerCheck(question, userInput){
    if (!question || !userInput) {
        console.error('There is no question, operation failed')
    }
    //the user gets the question right
    if (userInput == question.answer){
        console.log('You got it right!')
        return true
    }
    if (userInput != question.answer){
        console.log('You got it wrong.')
        return false
    }

}