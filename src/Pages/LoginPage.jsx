import React from 'react';
import { useForm } from 'react-hook-form';
import '../CSS/LoginPage.css';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};
  return (
    <div className='login-container'>
      <div className='login-box'>
        <h2>Back to your digital life</h2>
        <p>Choose one of the options to go</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='email'
            placeholder='get@ziontutorial.com'
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className='error'>This field is required</span>
          )}
          <input
            type='password'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className='error'>This field is required</span>
          )}
          <button type='submit'>Log in</button>
        </form>
        <div className='login-options'>
          <p>Or continue with</p>
          <div className='login-buttons'>
            <button className='google-login'>Google</button>
            <button className='facebook-login'>Meta</button>
            <button className='apple-login'>Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
