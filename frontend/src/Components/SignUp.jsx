// BY THIS PAGE THEN WE CAN MAKE A SIGN UP


// import React, { useState } from 'react';
// import { TextField, Button, Typography, Container, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../Redux/UserSlices';

// const SignUp = () => {
//     const [values, setValues] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (event) => {
//         setValues({
//             ...values,
//             [event.target.name]: event.target.value
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log(values);
//         try {
//             await axios.post('http://localhost:8081/signup', values);

//             const response = await axios.post('http://localhost:8081/admins', {
//                 email: values.email,
//                 password: values.password,
//             });

//             if (response.data.status === "Success") {
//                 console.log('User logged in:', response.data.user);
//                 dispatch(setUser(response.data.user));
//                 navigate('/');
//             } else {
//                 console.log('Login failed after signup');
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <Container maxWidth="sm">
//             <Box
//                 mt={8}
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="center"
//                 alignItems="center"
//             >
//                 <Typography variant="h4" component="h1" gutterBottom>
//                     Sign Up
//                 </Typography>
//                 <form onSubmit={handleSubmit}>
//                     <TextField
//                         label="Name"
//                         name="name"
//                         value={values.name}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                         required
//                     />
//                     <TextField
//                         label="Email"
//                         name="email"
//                         type="email"
//                         value={values.email}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                         required
//                     />
//                     <TextField
//                         label="Password"
//                         name="password"
//                         type="password"
//                         value={values.password}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="normal"
//                         required
//                     />
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         fullWidth
//                         sx={{ mt: 2 }}
//                     >
//                         Sign Up
//                     </Button>
//                 </form>
//             </Box>
//         </Container>
//     );
// };

// export default SignUp;
