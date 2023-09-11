import '../styles/SignUp.css'
import Button from './Button';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        photoURL: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can add the logic to send the form data to your backend or perform any other actions.
        console.log('Form data submitted:', formData);
      };
    
      return (
        <div>
         <h2 as="h2" className="text-lg font-medium text-center leading-6 text-indigo-50">
            Sign Up
         </h2>
          <form className='flex flex-wrap flex-col items-stretch content-center text-base space-y-4 p-4 bg-indigo-50 border-2 border-current' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
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
                required
              />
            </div>
            <div>
              <label htmlFor="photoURL">Photo URL:</label>
              <input
                type="url"
                id="photoURL"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
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
                <option value="argentina">Argentina</option>
                <option value="brazil">Brazil</option>
                <option value="chile">Chile</option>
                {/* Add more country options as needed */}
              </select>
            </div>
            <div>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      );
    }
    

export default SignUp;
