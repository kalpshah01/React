import React, { useState } from 'react';

function App() {
  const [isLogin, setLogin] = useState(true);

  const handleUiChange = () => {
    setLogin(!isLogin);
  };

  return (
    <div className='main-wrapper'>
      <div className="auth-container">
        <div className={`form-box ${isLogin ? 'login' : 'signup'}`}>
          
          
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>    
          <p>{isLogin ? "Please enter your details" : "Join our community today"}</p>
          
          <div className="social-icons">
            
            {!isLogin && (
              <div className="input-group">
                <input type="text" placeholder="Full Name" />
              </div>
            )}

            
            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" />
            </div>

            
            <button type="submit" className="btn">
              {isLogin ? "Login" : "Sign Up"}
            </button>
            
            
            <p className="switch">
              {isLogin ? "Don't have an account?" : "Already have an account?"} 
              <button onClick={handleUiChange} className="link-btn">
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;