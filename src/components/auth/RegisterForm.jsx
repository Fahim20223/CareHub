"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  // Phone,
  // CreditCard,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { postUser } from "@/actions/server/auth";
import SocialButton from "./SocialButton";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const params = useSearchParams();
  const callBackUrl = params.get("callbackUrl") || "/";

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    // nid: "",
    email: "",
    // phone: "",
    password: "",
    // confirmPassword: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await postUser(formData);

    if (result.acknowledged) {
      alert("successful please login");
      // router.push("/login");
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
        callbackUrl: callBackUrl,
      });
      if (result.ok) {
        Swal.fire("success", "Registered successfully", "success");
        router.push(callBackUrl);
      } else {
        Swal.fire("error", "Sorry", "error");
      }
    }

    // Password validation
    // if (formData.password.length < 6) {
    //   alert("Password must be at least 6 characters");
    //   return;
    // }
    // if (!/[A-Z]/.test(formData.password)) {
    //   alert("Password must contain at least one uppercase letter");
    //   return;
    // }
    // if (!/[a-z]/.test(formData.password)) {
    //   alert("Password must contain at least one lowercase letter");
    //   return;
    // }
    // if (formData.password !== formData.confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    console.log("Register:", formData);
    // Add your registration logic here
  };

  // const handleGoogleSignup = () => {
  //   console.log("Google signup clicked");
  //   // Add Google OAuth logic here
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20 flex items-center justify-center p-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        {/* Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-500 dark:to-teal-600 p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <span className="text-4xl">🎉</span>
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h2>
            <p className="text-white/90">Join CareHub family today</p>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form className="space-y-6">
              {/* Grid Layout for 2 Columns */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-pink-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </motion.div>

                {/* NID Field */}
                {/* <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    NID Number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="text"
                      required
                      value={formData.nid}
                      onChange={(e) =>
                        setFormData({ ...formData, nid: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-pink-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="1234567890123"
                    />
                  </div>
                </motion.div> */}

                {/* Email Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-pink-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>

                {/* Phone Field */}
                {/* <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-pink-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="+880 1700-000000"
                    />
                  </div>
                </motion.div> */}

                {/* Password Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-pink-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Min 6 chars, 1 uppercase, 1 lowercase
                  </p>
                </motion.div>

                {/* Confirm Password Field */}
                {/* <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-pink-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </motion.div> */}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Photo URL
                  </label>

                  <div className="relative">
                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />

                    <input
                      type="url"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-pink-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="checkbox checkbox-sm border-gray-300 dark:border-gray-600 [--chkbg:theme(colors.pink.500)] dark:[--chkbg:theme(colors.emerald.500)] mt-1"
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-pink-500 dark:text-emerald-500 hover:underline font-medium"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-pink-500 dark:text-emerald-500 hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-500 dark:to-teal-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Create Account
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>
            </form>

            {/* Google Signup Button */}
            <SocialButton />
            {/* Login Link */}
            <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-pink-500 dark:text-emerald-500 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
