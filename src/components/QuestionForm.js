import { Formik, validateYupSchema } from 'formik';
import * as Yup from 'yup';

export default function QuestionForm() {
    return (
        <Formik
            initialValues={{
                question: '',
                incorrect1: '',
                incorrect2: '',
                incorrect3: '',
                incorrect1Message: '',
                incorrect2Message: '',
                incorrect3Message: '',
                answer: '',
                response: '',
            }}
            validationSchema={Yup.object().shape({
                question: Yup.string().required()
            })}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <div className='question-form'>
                            <label htmlFor='question'>Question</label>
                            <input
                                id='question'
                                placeholder='Your Question'
                                type='text'
                                value={values.question}
                                onChange={handleChange}
                            />
                            <label htmlFor='answer'>Answer</label>
                            <input
                                id='answer'
                                placeholder='The correct answer'
                                type='text'
                                value={values.answer}
                                onChange={handleChange}
                            />
                            <label htmlFor='answer'>Response</label>
                            <input
                                id='response'
                                placeholder='explanation for the correct answer'
                                type='text'
                                value={values.response}
                                onChange={handleChange}
                            />
                            <label htmlFor='answer'>Incorrect Answer 1</label>
                            <input
                                id='incorrect1'
                                placeholder='one incorrect answer'
                                type='text'
                                value={values.incorrect1}
                                onChange={handleChange}
                            />
                            <input
                                id='incorrect1Message'
                                placeholder='explanation for the incorrect answer'
                                type='text'
                                value={values.incorrect1Message}
                                onChange={handleChange}
                            />
                            <label htmlFor='answer'>Incorrect Answer 2</label>
                            <input
                                id='incorrect2'
                                placeholder='one incorrect answer'
                                type='text'
                                value={values.incorrect2}
                                onChange={handleChange}
                            />
                            <input
                                id='incorrect2Message'
                                placeholder='explanation for the incorrect answer'
                                type='text'
                                value={values.incorrect2Message}
                                onChange={handleChange}
                            />
                            <label htmlFor='answer'>Incorrect Answer 3</label>
                            <input
                                id='incorrect3'
                                placeholder='one incorrect answer'
                                type='text'
                                value={values.incorrect3}
                                onChange={handleChange}
                            />
                            <input
                                id='incorrect3Message'
                                placeholder='explanation for the incorrect answer'
                                type='text'
                                value={values.incorrect3Message}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                )
            }}
        </Formik>
    )
}