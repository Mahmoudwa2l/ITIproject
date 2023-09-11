import './SignIn.css';

function SignIn() {
  return (
    <div className="text-center pb-5 pos">
      <div className="form-signin ">
        <div>
          <h1>Unity Studios</h1>
          <h1 className="h4 p-3 mb-3 text-muted fw-normal mt-3">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <p className="mt-2 mb-3 text-muted">Already have account ? <a href='#1'>Login</a></p>
          <button className="w-100 btn btn-lg btn-primary " type="submit">Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn