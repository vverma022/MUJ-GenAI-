"use client"

import { useState } from 'react'
import MUJ from '../assets/MUJ.jpg'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign in attempted with:', email, password)
  }

  return (
    <div className="flex min-h-screen">
      
      <div className="hidden lg:block lg:w-3/4 relative">
        <img src={MUJ.src} alt="MUJ Logo" className="absolute inset-0 object-cover w-full h-full" />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex justify-center">Sign-in</CardTitle>
            <CardDescription  className='flex justify-center'>Please sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {/* <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Create account
            </a> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}