import React, { useState } from "react";


const DashBoard = () =>{
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? 'active' : ''} onClick={()=> setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ''} onClick={()=> setIsLogin(false)}>Sign Up</button>
                </div>
                {isLogin ? <>
                    <div className="form">
                        <h2>Login</h2>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot Password</a>
                        <button>Login</button>
                        <p>Not a member <a href="#" onClick={()=>{setIsLogin(false)}}>Signup Now</a></p>
                    </div>
                </> : <>
                <div className="form">
                        <h2>Sign Up</h2>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Address" />
                        <button>Sign Up</button>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default DashBoard;