import './SignIn.css';
import { useState } from 'react';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // You can add your logic here to handle the form submission,
    // for example, making an API request to authenticate the user.

    // Example API call using fetch:
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful login here
          alert('Login successful');
        } else {
          // Handle login failure here
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="text-center pb-5 pos">
      <div className="form-signin ">
        <div>
          <h1>Unity Studios</h1>
          <h1 className="h4 p-3 mb-3 text-muted fw-normal mt-3">Please sign in</h1>

          <form onSubmit={handleSubmit}>
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

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <p className="mt-2 mb-3 text-muted">
              Already have an account ? <a href="#1">Login</a>
            </p>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
