"use client"
import React, { useState } from 'react'
import { SignedOut, SignIn, SignUp } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

function SignInAuthComponent() {
  const [isSignIn, setIsSignIn] = useState(true);

  const commonAppearance = {
    elements: {
      card: "bg-white/90",
      headerTitle: "text-orange-600",
      headerSubtitle: "text-orange-400",
      socialButtonsBlockButton: "bg-white hover:bg-orange-100 border border-orange-300 text-orange-600",
      formButtonPrimary: "bg-orange-600 hover:bg-orange-700 text-white",
      footerActionLink: "text-orange-600 hover:text-orange-500",
      formFieldInput: "bg-white border border-orange-300 text-black placeholder:text-orange-400",
      formFieldLabel: "text-orange-600",
      dividerLine: "bg-orange-300",
      dividerText: "text-orange-400",
      formFieldSuccessText: "text-green-600",
      formFieldErrorText: "text-red-600",
      identityPreviewText: "text-orange-600",
      identityPreviewEditButtonIcon: "text-orange-600",
      formResendCodeLink: "text-orange-600 hover:text-orange-500",
      alert: "text-orange-600 bg-white border-orange-300",
      alertText: "text-orange-600",
      socialButtonsBlockButtonText: "text-orange-600",
      socialButtonsBlockButtonIcon: "text-orange-600",
      formFieldInputShowPasswordButton: "text-orange-600",
      formFieldInputShowPasswordIcon: "text-orange-600",
      formButtonReset: "text-orange-600 hover:text-orange-500",
      otpCodeFieldInput: "bg-white border-orange-300 text-black",
      formFieldWarningText: "text-yellow-600"
    }
  };

  return (    
    <SignedOut>
      <div className="min-h-screen w-full bg-gradient-to-br from-orange-200 via-orange-100 to-orange-200 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full grid grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isSignIn ? "signin-text" : "signup-text"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <Image src="/logo.svg" alt="Thinkly Logo" width={50} height={50} />
                  <h1 className="text-5xl font-bold text-black drop-shadow-[0_0_15px_rgba(251,146,60,0.3)]">
                    Thinkly
                  </h1>
                </div>
                <p className="text-xl text-orange-600">
                  {isSignIn 
                    ? 'Sign in to continue your ideation' 
                    : 'Let us help you think better with us'}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="backdrop-blur-sm bg-white/90 rounded-xl p-8 shadow-xl border border-orange-300"
          >
            <div className="flex justify-center space-x-4 mb-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSignIn(true)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isSignIn 
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-300' 
                    : 'text-orange-600 hover:bg-orange-100'
                }`}
              >
                Sign In
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSignIn(false)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  !isSignIn 
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-300' 
                    : 'text-orange-600 hover:bg-orange-100'
                }`}
              >
                Sign Up
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={isSignIn ? "signin-form" : "signup-form"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center w-full"
              >
                <div className="w-full max-w-sm mx-auto">
                  {isSignIn ? (
                    <SignIn 
                      routing="hash" 
                      appearance={commonAppearance}
                    />
                  ) : (
                    <SignUp 
                      routing="hash" 
                      appearance={commonAppearance}
                    />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SignedOut>
  );
}

export default SignInAuthComponent;