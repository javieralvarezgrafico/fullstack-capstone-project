import React, { useState } from 'react';

import './LoginPage.css';

function LoginPage() {
    //insertar código aquí para crear variables de hook useState para email, contraseña
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // insertar código aquí para crear la función handleLogin e incluir console.log
    const handleLogin = async () => {
        console.log("Inside handleLogin")
    }
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-card p-4 border rounded">
              <h2 className="text-center mb-4 font-weight-bold">Iniciar Sesión</h2>
          {/* insertar código aquí para crear elementos de entrada para las variables email y contraseña */}
                <div className="mb-4">
                    <label htmlFor="email" className="form label"> Email</label><br />
                    <input id="email" type="text" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form label"> FirstName</label><br />
                    <input id="password" type="text" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
          {/* insertar código aquí para crear un botón que realice la función `handleLogin` al hacer clic */}
                <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>
                <p className="mt-4 text-center">
                    ¿Nuevo aquí? <a href="/app/register" className="text-primary">Regístrate aquí</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default LoginPage;