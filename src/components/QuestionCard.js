import { Card, Button, Row, Col } from 'react-bootstrap'
import answerCheck from '../utilities/answercheck'
import { useState } from 'react'
import { genericIncorrectMessage } from '../appConstants'

export default function QuestionCard({ question }) {

    //the currently selected answer
    const [selected, setSelected] = useState(null)
    //this shows if the question has been answered or not
    const [answered, setAnswered] = useState(false)
    //bool that shows if the user answered correctly or not
    const [correct, setCorrect] = useState(null)

    const handleSubmit = () => {
        setCorrect(answerCheck(question, selected))
        setAnswered(true)
    }

    //handles the logic for what to show in the footer when the question has been answered.
    const QuestionResponse = () => {
        if (!selected) return 'Complete the question to continue.'
        if (selected && correct == null ) return `You are currently selecting ${selected}.  Submit to lock it in!`
        if (correct) return question.response
        //if user is wrong, display the hint if provided by author, or the default incorrect response if not.
        if (!correct) {
            if (selected == 'A' && question.incorrectA) return question.incorrectA
            if (selected == 'B' && question.incorrectB) return question.incorrectB
            if (selected == 'C' && question.incorrectC) return question.incorrectC
            if (selected == 'D' && question.incorrectD) return question.incorrectD
            //This should be the default failure message if one is not provided by the author.
            return genericIncorrectMessage
        }
    }

    console.log(question)

    return (
        <Card className='question-card'>
            <Card.Header>
                Question X of Y
            </Card.Header>
            <Card.Body>
                <div>
                    {question.prompt}
                </div>
                {/* the image that goes to a question should only appear if the question has an image  */}
                {question.image && (
                    <img src={question.image} />
                )}
                <div className='options'>
                    <Row>
                        <Col>
                            <Button className="answer-select" variant={'secondary'} disabled={correct} onClick={() => setSelected('A')}>{question.A}</Button>
                        </Col>
                        <Col>
                            <Button className="answer-select" variant={'secondary'} disabled={correct} onClick={() => setSelected('C')}>{question.C}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="answer-select" variant={'secondary'} disabled={correct} onClick={() => setSelected('B')}>{question.B}</Button>
                        </Col>
                        <Col>
                            <Button className="answer-select" variant={'secondary'} disabled={correct} onClick={() => setSelected('D')}>{question.D}</Button>
                        </Col>
                    </Row>
                </div>
                
            </Card.Body>
            <Card.Footer>
                {/* The option to submit should not appear unless something is selected. */}
                <QuestionResponse />
                {selected && (
                    <Row>
                        <Col>
                            <Button block variant="success" disabled={correct} onClick={handleSubmit}>Submit</Button>
                        </Col>
                    </Row>
                )}
            </Card.Footer>
        </Card>
    )
}