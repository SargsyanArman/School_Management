import axios from 'axios';
import { setUser } from '../Redux/UserSlices';
import { API_BASE_URL } from './GeneralConstants';

// These are field for login admin system
export const fields = [
    { label: 'Email', type: 'text', stateKey: 'email' },
    { label: 'Password', type: 'password', stateKey: 'password' },
];

// This is a function for log out
export const handleLogout = (setUser) => {
    setUser(null);
};


// Admin can make login by this function
export const handleLoginSubmit = async (event, email, password, dispatch, navigate) => {
    event.preventDefault();
    console.log('Submitting login with', { email, password });
    try {
        const res = await axios.post(`${API_BASE_URL}admins`, { email, password });
        console.log('Response:', res.data);
        if (res.data.status === "Success") {
            const userInfo = res.data.user;
            dispatch(setUser(userInfo));
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    } catch (err) {
        console.error('Error during login:', err);
    }
};

