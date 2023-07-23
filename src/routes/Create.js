/*
The create route is intended to be used to create a quiz or create a question.

Creating either a quiz or a question can be done in isolation.  
Then, you can edit a quiz to add questions to it.
You can only edit your own quizzes, and your quizzes can only include your own questions.
*/
import QuestionForm from "../components/QuestionForm";
import QuizForm from "../components/QuizForm";
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function Create() {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const [showQuizModal, setShowQuizModal] = useState(false)
    const handleShowQuizModal = () => setShowQuizModal(true)
    const handleCloseQuizModal = () => setShowQuizModal(false)

    const CreateQuestionModal = () => {
        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header >
                    <Modal.Title>Create a Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <QuestionForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const CreateQuizModal = () => {
        return (
            <Modal show={showQuizModal} onHide={handleCloseQuizModal} size="lg">
                <Modal.Header >
                    <Modal.Title>Create a Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <QuizForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseQuizModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseQuizModal}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <div className="create">
            <CreateQuestionModal />
            <CreateQuizModal />
            <div className="creation-dashboard">
                <div className="dash-head">
                    <h1>
                        Your Quizzes
                    </h1>
                    <Button onClick={handleShowQuizModal} className="bigbtn">Create a Quiz</Button>
                    Some sort of table with option to show only unpublished quizzes
                </div>
                <div className="dash-head">
                    <h1>
                        Your Questions
                    </h1>
                    <Button onClick={handleShow} className="bigbtn">Create a Question</Button>
                    Some sort of table with options to show only unassigned questions
                </div>
            </div>
        </div>
    )
}