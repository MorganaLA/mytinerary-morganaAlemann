import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { user_login_google } from "../store/actions/userActions";
import { useDispatch } from "react-redux";



export const GoogleSignIn = ({handleGooglesign}) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {
        // console.info('JWT GOOGLE: ', response.credential);
        const data = {
            token_id: response.credential
        }
    //     const userResponse = await axios.post('http://localhost:8000/api/auth/google', data);
    //     console.log(userResponse)
    //     localStorage.setItem("token", userResponse.data.response.token);
    //     localStorage.setItem("user", JSON.stringify(userResponse.data.response.user));
    //     handleGooglesign(true)
    //     navigate('/')
       dispatch(user_login_google({ data }));
    }

    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "1095261040089-bqq3228teu5gv0jd3igjesk70vi8bomf.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'rectangular', theme: "outline", locale: 'en', size: "large", text: 'signin_with' } 
            );
        }
    }, [])

    return (
        
        <div ref={googleButton} className='flex flex-wrap self-center'></div>
    )
}