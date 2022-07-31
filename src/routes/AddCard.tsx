import { Formik } from 'formik'
import * as Yup from "yup"

function AddCard() {
  return (
    <div>
        <Formik
        initialValues={{
            question:"",
            answer:"",
            description:""
        }}
        validationSchema={Yup.object().shape({
            question: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required('Username Is Required'),
            answer: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required('Answer Is Required'),
            description: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required('Answer Is Required'),
        })}
        onSubmit={(values) =>{
            alert(JSON.stringify(values))
          }}
        >
        {({handleChange,values,handleSubmit,handleBlur,errors,touched}) => (
            <form className='add-form' onSubmit={handleSubmit}>
            <h3 className='title-card'>Add Cards</h3>
            <input
            className='input7'
            placeholder='Add Question'
            name='question'
            value={values.question}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.question && touched.question ? <span className="red">{errors.question}</span> : null}
            <br />
            <br />
            <input
            className='input8'
            placeholder='Add Answer'
            name='answer'
            value={values.answer}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.answer && touched.answer ? <span className="red">{errors.answer}</span> : null}
            <br />
            <br />
            <input
            className='input9'
            placeholder='Add Description'
            name='description'
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {errors.description && touched.description ? <span className="red">{errors.description}</span> : null}
            <br />
            <br />
            <br />
            <button className='button-card'>Add Card</button>
        </form>
        )}
        </Formik>
    </div>
  )
}

export default AddCard