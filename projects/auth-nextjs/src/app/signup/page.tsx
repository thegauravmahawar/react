"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onSignup = async () => {
    try {
      const response = await axios.post('/api/users/signup', user);
      console.log('Signup success: ', response.data);
      toast.success('User signup up successfully.');
      router.push(`/profile/${response.data.id}`)
    } catch (error: any) {
      console.log('Signup failed: ', error.message);
      toast.error(error.message);
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
      <h1>Signup</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4
      focus:outline-none focus:border-gray-600 text-black"
        id="email"
        placeholder="Email Address"
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
      />

      <label htmlFor="password">password</label>
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
        onClick={onSignup}
      >
        Signup
      </button>

      <Link href="/login">Already have an account? Login.</Link>
    </div>
  )
}