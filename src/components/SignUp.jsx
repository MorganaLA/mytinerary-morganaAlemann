import { useSelector, useDispatch } from 'react-redux';
import { user_signup } from '../store/actions/userActions'; 
import { useState, useEffect } from 'react';
import { GoogleSignIn } from './GoogleSignIn';
import { get_cities } from '../store/actions/cityActions';
import '../styles/SignUp.css';
import Button from './Button';
import SignIn from './SignIn';

function SignUp() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    photo: '',
    country: 'select',
  });
  const [showSignIn, setShowSignIn] = useState(false);

  const loading = useSelector((store) => store.userReducer.loading);
  const error = useSelector((store) => store.userReducer.error);

  const dispatch = useDispatch();

  const cities = useSelector((store) => store.cityReducer.cities)
  const Countries = [...new Set(cities.map((city) => city.country))];

  useEffect(() => {
    dispatch(get_cities());
  }, [dispatch]);


  const handleChange = (u) => {
    setFormData({
      ...formData,
      [u.target.name]: u.target.value
  })
  };

  const handleSubmit = async (u) => {
    u.preventDefault();
    try {

      await dispatch(user_signup(formData));
     
      setShowSignIn(true);
    } catch (error) {
      setShowSignIn(false);
      console.log(error);
    }
  };

  const handleShowSignIn = () => {
    setShowSignIn(true);
  };

  return (
    <div className='w-[95%] sm:w-4/5 mt:w-2/3 lg:w-2/5 lg:h-fit lg:mt-10 flex flex-col items-center justify-center p-2 lg:p-4 mt-10 mb-auto lg:my-auto border-2 border-current bg-indigo-100/40'>
      {showSignIn ? (
        <SignIn />
      ) : (
        <>
          <h2 as="h2" className="text-lg font-base font-bold mb-2 text-center text-indigo-900">
            Sign Up
          </h2>
          <form className='w-[95%] mx-auto h-5/6 lg:h-auto flex flex-wrap flex-col items-start content-center text-base space-y-[1.15rem] p-4 lg:p-8 bg-indigo-50 border-2 border-current' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                autoComplete="given-name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                autoComplete="family-name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
            </div>
            <div>
              <label htmlFor="photoURL">Photo URL:</label>
              <input
                type="url"
                id="photoURL"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="select">Select country</option>
                {Countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex flex-row mx-auto text-sm lg:text-base items-center justify-center'>
              <Button
                type="submit"
                text='Sign Up'
                className='flex flex-row items-center mt-auto mx-2 lg:mx-6 button w-fit lg:h-10 group relative focus:outline-none focus:ring'
                onClick={handleSubmit}
             />
              <div className='flex flex-col items-center lg:mx-6'>
                <p className="text-sm text-gray-600 w-20 lg:w-24 mb-[3px] flex flex-col">
                  Already have an account?
                </p>
                <Button
                  text='Sign in'
                  className='flex flex-row items-center button mx-2 w-fit lg:h-10 group relative focus:outline-none focus:ring'
                  onClick={handleShowSignIn}
                />
              </div>
            </div>
            <GoogleSignIn />
          </form>
        </>
      )}
    </div>
  );
}

export default SignUp;
