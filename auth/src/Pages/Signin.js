import React from "react";
import { useState } from "react";
function SigninPage() {

    const [Email , setEmail] = useState("");

    const [Password , setPassword] = useState("");


    const HandleSignin = async(e)=> {
        e.preventDefault();

        try {

            const res = await fetch("http://localhost:5000/api/signin", {

                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body: JSON.stringify({ "email" : Email, "password":Password})
            })
            
            if(res.ok){
                const data = await res.json()
                console.log(data)
            }

            else{
                console.log("Failed");
            }

        } catch (error) {
            console.log("Error :" , error)
            
        }

    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Please login to continue 🌱
        </p>

        <form className="mt-6 space-y-4" onSubmit={HandleSignin} >
          <input
            type="email"
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="password"
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            type="submit"
            className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default SigninPage;
