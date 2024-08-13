import { RouterProvider } from "react-router-dom";
import router from './router/router';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";
import { user_token } from "./store/actions/userActions";


import './App.css';
import 'tailwindcss/tailwind.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://mytinerary-back-morganaalemann.onrender.com/api/auth/token`;
    const token = localStorage.getItem('token');

    if (token) {
      const configs = { headers: { 'Authorization': `Bearer ${token}` } };

      axios.post(url, null, configs)
        .then(response => {
          dispatch(user_token(response.data.user));
        })
        .catch(err => {
          console.error('Error fetching token:', err);
        });
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
