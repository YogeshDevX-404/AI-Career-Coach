import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <SignIn
        path="/sign-in"               // URL path for the sign-in page
        routing="path"                 // Make Clerk work with Next.js path routing
        signUpUrl="/sign-up"           // Where to go if user wants to sign up
        afterSignInUrl="/" 
    />
  )
}

export default Page
