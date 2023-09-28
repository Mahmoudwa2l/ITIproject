import { useDispatch, useSelector  } from 'react-redux';
import './SignIn.css';
import { useState } from 'react';
import {login} from "../../redux/apiCalls";
function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isFetching , error} = useSelector((state)=> state.user);


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    login(dispatch,{username,password});

    
  };

  return (
    <div className="text-center pb-5 pos">
      <div className="form-signin ">
        <div>
          <h1>Unity Studios</h1>
          <h1 className="h4 p-3 mb-3 text-muted fw-normal mt-3">Please sign in</h1>

          <form >
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <label htmlFor="floatingInput">User Name</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            {error && <span className='text-danger'>Oops somothing went wrong..</span>}
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <p className="mt-2 mb-3 text-muted">
              Already have an account ? <a href="#1">Login</a>
            </p>
            <button className="w-100 btn btn-lg btn-primary"  onClick={handleSubmit} disabled={isFetching} type="submit">
              Login
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
