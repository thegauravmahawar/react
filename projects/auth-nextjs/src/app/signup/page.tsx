"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: ''
  })

  const onSignup = async () => {

  }

  return (
    <div className="flex flex-col items-center justify-center
    min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4
      focus:outline-none focus:border-gray-600"
        id="email"
        placeholder="Email Address"
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
      />

      <label htmlFor="password">password</label>
      <input className="p-2 border border-gray-300 rounded-lg mb-4
      focus:outline-none focus:border-gray-600"
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