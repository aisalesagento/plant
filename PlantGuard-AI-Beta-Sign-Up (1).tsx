// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [email, setEmail] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
setIsSubmitting(true);
// Simulate API call
setTimeout(() => {
setIsSubmitting(false);
setIsSubmitted(true);
setEmail('');
}, 1500);
};
return (
<div className="bg-gray-50 min-h-screen font-sans">
{/* Navigation Bar */}
<nav className="bg-green-600 text-white fixed w-full top-0 z-50 shadow-md">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center">
<i className="fas fa-leaf text-xl mr-2"></i>
<span className="font-bold text-lg">PlantGuard</span>
</div>
<button className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium !rounded-button">
Login
</button>
</div>
</nav>
{/* Main Content */}
<div className="pt-16 pb-16">
{/* Hero Section */}
<section className="relative px-4 pt-8 pb-12 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50 to-green-100 -z-10"></div>
<div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-green-200 opacity-30 -z-10"></div>
<div className="absolute -left-16 bottom-0 w-48 h-48 rounded-full bg-green-200 opacity-30 -z-10"></div>
<div className="text-center mb-6">
<div className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full mb-3">
🚀 BETA LAUNCH
</div>
<h1 className="text-3xl font-bold text-green-800 mb-2">PlantGuard AI</h1>
<p className="text-xl text-green-700 font-medium">Your Smart Plant Doctor</p>
</div>
<div className="max-w-md mx-auto mb-8">
<img
src="https://public.readdy.ai/ai/img_res/8387be2bfce2716d6a47d0aca5a35244.jpg"
alt="PlantGuard AI App Interface"
className="w-full h-auto rounded-xl shadow-lg object-cover object-top"
/>
</div>
<div className="text-center mb-8">
<p className="text-gray-700 text-lg mb-6">
Do you love plants but struggle to keep them healthy? 🌿 <br />
Let PlantGuard AI be your personal plant doctor!
</p>
{!isSubmitted ? (
<form onSubmit={handleSubmit} className="max-w-md mx-auto">
<div className="flex mb-3">
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Enter your email"
className="flex-grow px-4 py-3 rounded-l-lg border-none shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
required
/>
<button
type="submit"
className="bg-green-600 text-white px-6 py-3 rounded-r-lg font-medium shadow-sm hover:bg-green-700 transition-colors !rounded-button"
disabled={isSubmitting}
>
{isSubmitting ? (
<i className="fas fa-spinner fa-spin"></i>
) : (
'Sign Up for Early Access'
)}
</button>
</div>
<p className="text-xs text-gray-500">Limited beta slots available. Sign up today!</p>
</form>
) : (
<div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg max-w-md mx-auto">
<i className="fas fa-check-circle text-green-600 mr-2"></i>
<span>Thanks for signing up! We'll be in touch soon.</span>
</div>
)}
</div>
</section>
{/* Features Section */}
<section className="px-4 py-10 bg-white">
<div className="text-center mb-8">
<h2 className="text-2xl font-bold text-gray-800 mb-2">Why PlantGuard AI?</h2>
<p className="text-gray-600">Powerful features to keep your plants thriving</p>
</div>
<div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
<div className="bg-green-50 rounded-xl p-5 shadow-sm">
<div className="flex items-start">
<div className="bg-green-600 text-white rounded-full p-3 mr-4">
<i className="fas fa-camera text-xl"></i>
</div>
<div>
<h3 className="font-bold text-gray-800 mb-1">Instant AI Diagnosis</h3>
<p className="text-gray-600 text-sm">Simply snap a picture, and AI will detect problems within seconds!</p>
</div>
</div>
</div>
<div className="bg-green-50 rounded-xl p-5 shadow-sm">
<div className="flex items-start">
<div className="bg-green-600 text-white rounded-full p-3 mr-4">
<i className="fas fa-bug text-xl"></i>
</div>
<div>
<h3 className="font-bold text-gray-800 mb-1">Pest & Disease Detection</h3>
<p className="text-gray-600 text-sm">Identify and eliminate plant threats before they spread.</p>
</div>
</div>
</div>
<div className="bg-green-50 rounded-xl p-5 shadow-sm">
<div className="flex items-start">
<div className="bg-green-600 text-white rounded-full p-3 mr-4">
<i className="fas fa-bell text-xl"></i>
</div>
<div>
<h3 className="font-bold text-gray-800 mb-1">Smart Care Reminders</h3>
<p className="text-gray-600 text-sm">Get customized watering, fertilizing, and repotting alerts.</p>
</div>
</div>
</div>
<div className="bg-green-50 rounded-xl p-5 shadow-sm">
<div className="flex items-start">
<div className="bg-green-600 text-white rounded-full p-3 mr-4">
<i className="fas fa-book text-xl"></i>
</div>
<div>
<h3 className="font-bold text-gray-800 mb-1">Plant Library & Growing Tips</h3>
<p className="text-gray-600 text-sm">Access expert care guides for hundreds of plants.</p>
</div>
</div>
</div>
</div>
</section>
{/* How It Works Section */}
<section className="px-4 py-10 bg-green-50">
<div className="text-center mb-8">
<h2 className="text-2xl font-bold text-gray-800 mb-2">How It Works</h2>
<p className="text-gray-600">Simple steps to diagnose and care for your plants</p>
</div>
<div className="max-w-md mx-auto">
<div className="relative">
<div className="absolute left-8 top-0 bottom-0 w-1 bg-green-200 z-0"></div>
<div className="relative z-10 flex mb-8">
<div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-md">
<span className="text-xl font-bold">1</span>
</div>
<div className="ml-6 mt-2">
<h3 className="font-bold text-gray-800 mb-1">Snap a Photo</h3>
<p className="text-gray-600 text-sm">Take a picture of your plant's leaves, soil, or entire plant.</p>
</div>
</div>
<div className="relative z-10 flex mb-8">
<div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-md">
<span className="text-xl font-bold">2</span>
</div>
<div className="ml-6 mt-2">
<h3 className="font-bold text-gray-800 mb-1">AI Diagnosis</h3>
<p className="text-gray-600 text-sm">Our advanced AI scans for diseases, pests, and care issues.</p>
</div>
</div>
<div className="relative z-10 flex mb-8">
<div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-md">
<span className="text-xl font-bold">3</span>
</div>
<div className="ml-6 mt-2">
<h3 className="font-bold text-gray-800 mb-1">Get Instant Solutions</h3>
<p className="text-gray-600 text-sm">Receive detailed treatment advice and preventative tips.</p>
</div>
</div>
<div className="relative z-10 flex">
<div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-md">
<span className="text-xl font-bold">4</span>
</div>
<div className="ml-6 mt-2">
<h3 className="font-bold text-gray-800 mb-1">Stay on Track</h3>
<p className="text-gray-600 text-sm">Get smart care reminders tailored to your plant's needs.</p>
</div>
</div>
</div>
</div>
</section>
{/* Target Audience */}
<section className="px-4 py-10 bg-white">
<div className="text-center mb-8">
<h2 className="text-2xl font-bold text-gray-800 mb-2">Perfect for</h2>
<p className="text-gray-600">PlantGuard AI helps plant lovers of all kinds</p>
</div>
<div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
<div className="bg-green-50 rounded-lg p-4 text-center">
<div className="text-3xl mb-2">🌻</div>
<h3 className="font-medium text-gray-800 text-sm">Home Gardeners</h3>
</div>
<div className="bg-green-50 rounded-lg p-4 text-center">
<div className="text-3xl mb-2">🏡</div>
<h3 className="font-medium text-gray-800 text-sm">Houseplant Lovers</h3>
</div>
<div className="bg-green-50 rounded-lg p-4 text-center">
<div className="text-3xl mb-2">🌾</div>
<h3 className="font-medium text-gray-800 text-sm">Urban Farmers</h3>
</div>
<div className="bg-green-50 rounded-lg p-4 text-center">
<div className="text-3xl mb-2">🌱</div>
<h3 className="font-medium text-gray-800 text-sm">Nursery Owners</h3>
</div>
</div>
</section>
{/* Beta Benefits */}
<section className="px-4 py-10 bg-green-50">
<div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-6 border border-green-100">
<div className="text-center mb-6">
<div className="inline-block text-3xl mb-2">🌟</div>
<h2 className="text-xl font-bold text-gray-800 mb-1">Beta User Perks!</h2>
<p className="text-gray-600 text-sm">Join our exclusive early access program</p>
</div>
<ul className="mb-6">
<li className="flex items-start mb-3">
<i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
<span className="text-gray-700">FREE Access during Beta Testing.</span>
</li>
<li className="flex items-start mb-3">
<i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
<span className="text-gray-700">Early Feature Testing – Help shape the app with your feedback!</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-green-600 mt-1 mr-3"></i>
<span className="text-gray-700">Exclusive Plant Care Tips from gardening experts.</span>
</li>
</ul>
<div className="text-center">
<button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-green-700 transition-colors w-full !rounded-button">
Sign Up for the Beta Now
</button>
<p className="text-xs text-gray-500 mt-2">Limited beta slots available – Sign up today!</p>
</div>
</div>
</section>
{/* Privacy & Security */}
<section className="px-4 py-8 bg-white">
<div className="max-w-md mx-auto">
<div className="text-center mb-6">
<h2 className="text-xl font-bold text-gray-800 mb-1">Privacy & Security</h2>
<p className="text-gray-600 text-sm">We take your data protection seriously</p>
</div>
<div className="flex justify-center space-x-6 mb-4">
<div className="flex flex-col items-center">
<div className="bg-gray-100 rounded-full p-3 mb-2">
<i className="fas fa-lock text-gray-700 text-xl"></i>
</div>
<span className="text-xs text-gray-600">Secure</span>
</div>
<div className="flex flex-col items-center">
<div className="bg-gray-100 rounded-full p-3 mb-2">
<i className="fas fa-shield-alt text-gray-700 text-xl"></i>
</div>
<span className="text-xs text-gray-600">Protected</span>
</div>
<div className="flex flex-col items-center">
<div className="bg-gray-100 rounded-full p-3 mb-2">
<i className="fas fa-user-secret text-gray-700 text-xl"></i>
</div>
<span className="text-xs text-gray-600">Private</span>
</div>
</div>
<div className="text-center text-gray-600 text-sm">
<p className="mb-2">🔹 No data tracking – Your plant photos and information stay private.</p>
<p>🔹 AI-Powered, Human-Verified – Our system is trained on real plant care expertise.</p>
</div>
</div>
</section>
</div>
{/* Tab Bar */}
<div className="fixed bottom-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
<div className="grid grid-cols-4 h-16">
<button className="flex flex-col items-center justify-center">
<i className="fas fa-home text-green-600 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">Home</span>
</button>
<a href="https://readdy.ai/home/e55e27e5-e784-4dfe-bdb9-43938c2d2674/aca619ed-7d09-44af-a914-8b1db4ba2e7a" data-readdy="true" className="flex flex-col items-center justify-center">
<i className="fas fa-camera text-gray-400 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">Diagnose</span>
</a>
<button className="flex flex-col items-center justify-center">
<i className="fas fa-leaf text-gray-400 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">My Plants</span>
</button>
<button className="flex flex-col items-center justify-center">
<i className="fas fa-user text-gray-400 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">Profile</span>
</button>
</div>
</div>
{/* Floating Action Button */}
<button className="fixed right-4 bottom-20 bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer !rounded-button">
<i className="fas fa-plus text-xl"></i>
</button>
</div>
);
};
export default App
