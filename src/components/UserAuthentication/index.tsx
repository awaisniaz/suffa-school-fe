import React,{useState} from 'react';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import './styles.scss'
import { loginConfig ,registrationConfig} from './login-config';

interface configuration {
    name:string;
    icon:string | React.ReactNode;
    type:string;
    placeHoder:string;
};
const UserAuthntication :React.FC = ()=>{
    const [userStatus,setUserStatus] = useState<boolean>()
    const [statusIcon,setStatusIcon] = useState<any>(<VpnKeyIcon/>)
    const [inputField,setInputField] = useState<configuration[]>(loginConfig)
    const [active,setActive] = useState<boolean>(true)

    const userLogin = () =>{
        setStatusIcon(<VpnKeyIcon/>)
        setInputField(loginConfig)
        setActive(true)
    }
    const userRegistration = ()=>{
        setStatusIcon(<LockOpenIcon/>)
        setInputField(registrationConfig)
        setActive(false)
    }
    return (
        <div className="user-container">
            <div className="authentication-conatiner">
            <div className="user-action">
                <button className={`action ${active ? 'active' : ''}`} onClick={userLogin}> login</button>
                <button className={`action ${!active ? 'active' : ''}`} onClick={userRegistration}>Regitration</button>

            </div>
                <div className="status-indicator">{statusIcon}</div>
                <div className="credition-container">
                {inputField.map(item=>{
                    return (
                    <div className="userInfo">
                    <div className="box-logo">{item.icon}</div>
                    <div className="text-box">
                        <input type={item.type} name={item.name} autoComplete='false'  className="input-box" placeholder = {item.placeHoder}>
                        </input>
                    </div>
                   </div>
                    );   
                })
                }
                 {active?<div className="forget-password">
                     <span>
                     <input type="checkbox" name="remember" id="remember"></input>
                        <label htmlFor="remember" className="label">Remember Me !</label>
                    </span>
                    <button className="forget-btn">Forget Password</button>
                    

                    </div>:null}
            </div>
            <div className="submit-btn-container">
                <button className="sub-btn">Submit</button>
            </div>

            </div>
            

        </div>
    );
}
export default UserAuthntication