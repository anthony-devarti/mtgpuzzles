import { Formik, validateYupSchema } from 'formik';
import * as Yup from 'yup';

export default function QuizForm() {
    return (
        <Formik
            initialValues={{
                name: '',
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
                            <label htmlFor='name'>Quiz Name</label>
                            <input
                                id='name'
                                placeholder='A Name for your Quiz'
                                type='text'
                                value={values.name}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                )
            }}
        </Formik>
    )
}