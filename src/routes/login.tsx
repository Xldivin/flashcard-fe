import { Link } from "react-router-dom"
import { Formik } from 'formik'
import * as Yup from "yup"

function login() {
  interface FormModel{
    email: string
    password: string
  }
  return (
    <div>
      <Formik<FormModel>
      initialValues={{
        email:"",
        password:""
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
            .email()
            .required('Enter valid email-id'),
        password: Yup.string()
            .min(4, "Minimum of 4 Numbers")
            .required("Password is Required"),
    })}
      onSubmit={(values) =>{
        alert(JSON.stringify(values))
      }}>
        {({handleSubmit, values, handleChange, handleBlur, errors, touched}) => (
                <form className='form' onSubmit={handleSubmit}>
                <p className='login'>LOGIN TO FLASH-CARD APP</p>
                <input
                className='input1'
                placeholder='Enter Email'
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.email && touched.email ? <span className="red">{errors.email}</span> : null}
                <input
                className='input2'
                placeholder='Enter Password'
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.password && touched.password ? <span className="red">{errors.password}</span> : null}
                <p className='signup'>
                    <Link to="/signup" className="signuplink">
                    Don't have an account yet
                    </Link>
                </p>
                <br />
                <button className='loginbutton'>Login</button>
            </form>
        )}
      </Formik>
    </div>
  )
}

export default login