import PropTypes from 'prop-types';
import axios from "axios";
import { useRef, useCallback, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { user_login_google } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

export const GoogleSignIn = ({ handleGooglesign }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const googleButton = useRef();

    // Usar useCallback para memorizar la función
    const handleCredentialResponse = useCallback(async (response) => {
        const data = {
            token_id: response.credential
        };
        try {
            const userResponse = await axios.post('https://mytinerary-back-morganaalemann.onrender.com/api/auth/google', data);
            localStorage.setItem("token", userResponse.data.response.token);
            localStorage.setItem("user", JSON.stringify(userResponse.data.response.user));
            handleGooglesign(true);
            navigate('/');
            dispatch(user_login_google({ data }));
        } catch (error) {
            console.error('Error during Google Sign-In:', error);
        }
    }, [dispatch, handleGooglesign, navigate]);

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "1095261040089-bqq3228teu5gv0jd3igjesk70vi8bomf.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'rectangular', theme: "outline", locale: 'en', size: "large", text: 'signin_with' }
            );
        }
    }, [handleCredentialResponse]);

    return (
        <div ref={googleButton} className='flex flex-wrap self-center'></div>
    );
};

// Validación de PropTypes
GoogleSignIn.propTypes = {
    handleGooglesign: PropTypes.func.isRequired
};
