"use client";

import { signIn } from "next-auth/react"; 
import { useRouter } from "next/navigation";

export default function LoginPage() {
  let router = useRouter();
  let handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    console.log({ email, password }); 
    try {
      const response = await signIn('credentials',
        {
          email,
          password,
          callbackUrl: '/',
          redirect: false
        });
      if (response.ok) { 
        router.push('/');
      } else { 
      }
    } catch (err) {
      console.log(err) 

    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-neutral-900 border border-white/10 rounded-xl shadow-lg p-8">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-white">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Welcome back. Please enter your details.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="
                w-full px-4 py-2 rounded-md
                bg-black border border-white/20
                text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-white/30
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="
                w-full px-4 py-2 rounded-md
                bg-black border border-white/20
                text-white placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-white/30
              "
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-white" />
              Remember me
            </label>

            <a href="#" className="text-gray-400 hover:text-white">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full py-2.5 rounded-md
              bg-white text-black
              font-medium
              hover:bg-gray-200
              transition-colors duration-200
            "
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <a href="/register" className="text-white hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
