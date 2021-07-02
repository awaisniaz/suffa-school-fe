import React from "react";
import './styles.scss'

const Header :React.FC=()=>{
    return (
        <div className="header-container">
            <div className="website-title">
                <h3><span className="title"><span className="title-first-letter">S</span>uffa School </span> System</h3>
            </div>
            <div className="header-action-container">
                <button className="action-btn" name="login">login</button>
                <button className="action-btn" name="registration">Registration</button>
            </div>
        </div>
    )
}
export default Header;