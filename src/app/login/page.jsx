// pages/login.js
'use client'
import { useState } from 'react';
import styles from './page.module.css'
import Router from 'next/router';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  console.log(username)
  console.log(password)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });
      const data = await response.json()
      console.log(data)
      if(response.status == 400){
        setError("Tài khoản hoặc mặt khẩu không chính xác !")
      }else{
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = '/';
      }
    } catch (error) {
      window.location.href = '/login';
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Đăng nhập</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        {error && (<div className={styles.dis}>{error}</div>)}
        <button type="submit" className={styles.button} onClick={(e) => handleLogin}>Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginPage;
