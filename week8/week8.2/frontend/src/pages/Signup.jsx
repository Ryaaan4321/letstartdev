import { useEffect, useState } from 'react';
import { BottomWarning } from '../components/BottomWarning';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { InputBox } from '../components/InputBox';
import { SubHeading } from '../components/SubHeading';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleSignUp = async () => {
    if (!firstName || !lastName || !username || !password) {
      alert('Please fill in all fields.');
      return;
    }
    

    try {
      const response = await fetch('http://localhost:3000/api/v2/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        console.error('Sign-up failed:', await response.text());
        alert('Sign-up failed.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign up" />
          <SubHeading label="Enter your information to create an account" />
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            label="First Name"
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            label="Last Name"
          />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email"
            label="Email"
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            label="Password"
          />
          <div className="pt-4">
            <Button onClick={handleSignUp} label="Sign up" />
          </div>
          <BottomWarning
            label="Already have an account?"
            buttonText="Sign in"
            to="/signin"
          />
        </div>
      </div>
    </div>
  );
};
