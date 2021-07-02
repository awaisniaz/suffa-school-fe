import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

export const loginConfig = [
    {
        name:'login',
        icon:<PersonIcon/>,
        type:'email',
        placeHoder:"Enter your Email"

    },
    {
        name:'password',
        icon:<VpnKeyIcon/>,
        type:'password',
        placeHoder:'Enter your Password'
    }
]

export const registrationConfig = [
    {
        name:'name',
        icon:<PersonIcon/>,
        type:'text',
        placeHoder:'Enter your Name'
    },
    {
        name:'email',
        icon:<AlternateEmailIcon/>,
        type:'email',
        placeHoder:'Enter your Email'
    },
    {
        name:'password',
        icon:<VpnKeyIcon/>,
        type:'password',
        placeHoder:'Enter your password'
    },
    {
        name:'confirmPassword',
        icon:<VpnKeyIcon/>,
        type:'password',
        placeHoder:'Enter your Confirm Password'
    }
]