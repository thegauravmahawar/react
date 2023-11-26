"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onLogin = async () => {
    try {
      const response = await axios.post('/api/users/login', user);
      console.log('Login success: ', response.data);
      toast.success('User logged in successfully.');
      router.push(`/profile/${response.data.id}`);
    } catch (error: any) {
      console.log('Login failed: ', error);
      toast.error(error.response.data.error);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center
    min-h-screen py-2">
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
      {/* <h1>Login</h1> */}
      <hr />
      <label htmlFor="email">Email</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4
      focus:outline-none focus:border-gray-600 text-black"
        id="email"
        placeholder="Email Address"
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
      />

      <label htmlFor="password">Password</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4
      focus:outline-none focus:border-gray-600 text-black"
        id="password"
        placeholder="Password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
      />

      <button className="p-2 border border-gray-300 rounded-lg mb-4
      focus:outline-none focus:border-gray-600"
        onClick={onLogin}
      >
        Login
      </button>

      <Link href="/signup">Don't have an account? <u>Signup.</u></Link>
    </div>
  )
}