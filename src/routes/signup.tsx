import { Link } from "react-router-dom"
import { Formik } from 'formik' 
import * as Yup from "yup"

function signup() {
  interface FormModel{
    username: string
    email: string
    password: string
    password2: string
  }
  return (
    <div>
      <Formik<FormModel>
      initialValues={{
        username:"",
        email:"",
        password:"",
        password2:""
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required('Username Required'),
        email: Yup.string()
            .email()
            .required('Enter valid email-id'),
        password: Yup.string()
            .min(4, "Minimum of 4 Numbers")
            .required("Password is Required"),
        password2: Yup.string()
            .min(4, "Minimum of 4 Numbers")
            .required("Confirm Password is Required"),
    })}
      onSubmit={(values) => {
        alert(JSON.stringify(values))
      }}>
      {({handleSubmit,values,handleChange,handleBlur,errors,touched}) =>(
              <form className='form2' onSubmit={handleSubmit}>
              <p className='login'>SIGNUP TO FLASH-CARD APP</p>
              <input
              className='input3'
              name="username"
              placeholder='Enter Your Username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.username && touched.username ? <span className="red">{errors.username}</span> : null}
              <input
              className='input4'
              name="email"
              placeholder='Enter Your Email Address'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.email && touched.email ? <span className="red">{errors.email}</span> : null}
              <input
              className='input5'
              name="password"
              placeholder='Enter Your Password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.password && touched.password ? <span className="red">{errors.password}</span> : null}
              <input
              className='input6'
              name="password2"
              placeholder='Confirm Your Password'
              value={values.password2}
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {errors.password2 && touched.password2 ? <span className="red">{errors.password2}</span> : null}
              <p className='signup'>
              <Link to="/login" className="signuplink">
                  Already have an account
              </Link>
              </p>
              <br />
              <button className='loginbutton'>SignUp</button>
          </form>
      )}
      </Formik>
</div>
  )
}

export default signup