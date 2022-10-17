import { Link } from "react-router-dom"

function Firstpage() {
  return (
    <div>
        <p className='welcome'>
            Welcome to the flash card app here!!! we give you best cards
        </p>
        <div className='welcome2'>
        <button className='button1'>
        <Link to="/login" className="buttonlogin1">
          Login
        </Link>
        </button>
        <button className='button2'>
        <Link to="/signup" className="buttonlogin1">
          SignUp
        </Link>
        </button>
        </div>
    </div>
  )
}


export default Firstpage