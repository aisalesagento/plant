// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef } from 'react';
const App: React.FC = () => {
const [captureMode, setCaptureMode] = useState<'camera' | 'preview' | 'analyzing' | 'result'>('camera');
const [flashEnabled, setFlashEnabled] = useState(false);
const [recentDiagnosesExpanded, setRecentDiagnosesExpanded] = useState(false);
const [analysisProgress, setAnalysisProgress] = useState(0);
const fileInputRef = useRef<HTMLInputElement>(null);
const recentDiagnoses = [
{
id: 1,
image: "https://public.readdy.ai/ai/img_res/a9f36507e018ea375972d3a96144e1b4.jpg",
date: "April 1, 2025",
result: "Leaf Spot Disease"
},
{
id: 2,
image: "https://public.readdy.ai/ai/img_res/f74eaf480ebfe7254a80dd8892d6da88.jpg",
date: "March 28, 2025",
result: "Healthy"
},
{
id: 3,
image: "https://public.readdy.ai/ai/img_res/0179e374870ee169953979bc32e06f4d.jpg",
date: "March 25, 2025",
result: "Nutrient Deficiency"
}
];
const handleCapture = () => {
setCaptureMode('analyzing');
// Simulate analysis progress
let progress = 0;
const interval = setInterval(() => {
progress += 5;
setAnalysisProgress(progress);
if (progress >= 100) {
clearInterval(interval);
setCaptureMode('result');
}
}, 200);
};
const handleFileUpload = () => {
if (fileInputRef.current) {
fileInputRef.current.click();
}
};
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
if (e.target.files && e.target.files.length > 0) {
setCaptureMode('analyzing');
// Simulate analysis progress
let progress = 0;
const interval = setInterval(() => {
progress += 5;
setAnalysisProgress(progress);
if (progress >= 100) {
clearInterval(interval);
setCaptureMode('result');
}
}, 200);
}
};
const handleBackToCamera = () => {
setCaptureMode('camera');
setAnalysisProgress(0);
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
<div className="pt-16 pb-20">
{/* Camera Interface */}
<div className="px-4 py-3">
{/* Instructions Card */}
<div className="bg-white rounded-xl shadow-sm p-3 mb-4">
<h2 className="text-green-800 font-medium text-sm mb-2">How to take a good plant photo:</h2>
<ul className="text-gray-700 text-xs">
<li className="flex items-start mb-1.5">
<i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
<span>Position the affected area clearly in frame</span>
</li>
<li className="flex items-start mb-1.5">
<i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
<span>Ensure good lighting (avoid shadows)</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-green-600 mt-0.5 mr-2"></i>
<span>Keep the camera steady for a clear image</span>
</li>
</ul>
</div>
{/* Camera Viewfinder / Preview */}
<div className="relative mb-4">
{captureMode === 'camera' && (
<div className="bg-black rounded-xl overflow-hidden aspect-[3/4] flex items-center justify-center">
<img
src="https://public.readdy.ai/ai/img_res/1cdda30dfd5b36029f725784c9047b35.jpg"
alt="Camera viewfinder"
className="w-full h-full object-cover"
/>
</div>
)}
{captureMode === 'analyzing' && (
<div className="bg-black rounded-xl overflow-hidden aspect-[3/4] flex items-center justify-center relative">
<img
src="https://public.readdy.ai/ai/img_res/4e558a366edce1bb9036dc015e29c862.jpg"
alt="Plant being analyzed"
className="w-full h-full object-cover opacity-80"
/>
<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
<div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
<p className="text-white font-medium mb-3">Analyzing your plant...</p>
<div className="w-64 bg-gray-700 rounded-full h-2.5 mb-2">
<div
className="bg-green-600 h-2.5 rounded-full"
style={{ width: `${analysisProgress}%` }}
></div>
</div>
<p className="text-xs text-gray-300">
{analysisProgress < 30 && "Detecting plant species..."}
{analysisProgress >= 30 && analysisProgress < 60 && "Identifying affected areas..."}
{analysisProgress >= 60 && analysisProgress < 90 && "Analyzing possible causes..."}
{analysisProgress >= 90 && "Preparing diagnosis..."}
</p>
</div>
</div>
)}
{captureMode === 'result' && (
<div className="bg-white rounded-xl overflow-hidden shadow-md">
<div className="p-4 bg-green-600 text-white">
<h2 className="font-bold text-lg">Diagnosis Complete</h2>
<p className="text-sm opacity-90">April 2, 2025 • 10:23 AM</p>
</div>
<div className="p-4">
<div className="flex mb-4">
<img
src="https://public.readdy.ai/ai/img_res/241ba18636d7546c1a152061fe24b212.jpg"
alt="Diagnosed plant"
className="w-24 h-24 object-cover rounded-lg mr-4"
/>
<div>
<div className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full inline-block mb-1">Fungal Infection</div>
<h3 className="font-bold text-gray-800">Leaf Spot Disease</h3>
<p className="text-sm text-gray-600">Severity: Moderate</p>
<p className="text-xs text-gray-500">Confidence: 93%</p>
</div>
</div>
<div className="mb-4">
<h4 className="font-medium text-gray-800 mb-1">Treatment Recommendations:</h4>
<ul className="text-sm text-gray-700">
<li className="flex items-start mb-1">
<i className="fas fa-check-circle text-green-600 mt-1 mr-2 text-xs"></i>
<span>Remove and dispose of affected leaves</span>
</li>
<li className="flex items-start mb-1">
<i className="fas fa-check-circle text-green-600 mt-1 mr-2 text-xs"></i>
<span>Apply fungicide spray every 7-10 days</span>
</li>
<li className="flex items-start">
<i className="fas fa-check-circle text-green-600 mt-1 mr-2 text-xs"></i>
<span>Improve air circulation around plant</span>
</li>
</ul>
</div>
<button
onClick={handleBackToCamera}
className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium !rounded-button"
>
New Diagnosis
</button>
</div>
</div>
)}
</div>
{/* Camera Controls (only show in camera mode) */}
{captureMode === 'camera' && (
<div className="flex items-center justify-between mb-6">
<button
onClick={handleFileUpload}
className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center cursor-pointer !rounded-button"
>
<i className="fas fa-images text-green-600 text-xl"></i>
</button>
<input
type="file"
ref={fileInputRef}
onChange={handleFileChange}
accept="image/*"
className="hidden"
/>
<button
onClick={handleCapture}
className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg !rounded-button"
>
<div className="w-16 h-16 border-4 border-white rounded-full"></div>
</button>
<button
onClick={() => setFlashEnabled(!flashEnabled)}
className={`w-14 h-14 ${flashEnabled ? 'bg-yellow-100' : 'bg-green-100'} rounded-full flex items-center justify-center cursor-pointer !rounded-button`}
>
<i className={`fas ${flashEnabled ? 'fa-bolt' : 'fa-bolt-slash'} ${flashEnabled ? 'text-yellow-500' : 'text-green-600'} text-xl`}></i>
</button>
</div>
)}
{/* Recent Diagnoses Section */}
{captureMode === 'camera' && (
<div className="bg-white rounded-xl shadow-sm overflow-hidden">
<div
className="flex items-center justify-between p-3 border-b border-gray-100 cursor-pointer"
onClick={() => setRecentDiagnosesExpanded(!recentDiagnosesExpanded)}
>
<h3 className="font-medium text-gray-800">Recent Diagnoses</h3>
<i className={`fas fa-chevron-${recentDiagnosesExpanded ? 'up' : 'down'} text-gray-500`}></i>
</div>
<div className={`${recentDiagnosesExpanded ? 'max-h-96' : 'max-h-36'} transition-all duration-300 overflow-hidden`}>
{recentDiagnoses.map(diagnosis => (
<div key={diagnosis.id} className="flex items-center p-3 border-b border-gray-100 cursor-pointer">
<img
src={diagnosis.image}
alt={diagnosis.result}
className="w-12 h-12 object-cover rounded-lg mr-3"
/>
<div className="flex-grow">
<p className="font-medium text-gray-800 text-sm">{diagnosis.result}</p>
<p className="text-xs text-gray-500">{diagnosis.date}</p>
</div>
<i className="fas fa-chevron-right text-gray-400 text-xs"></i>
</div>
))}
<div className="p-3 text-center">
<a
href="https://readdy.ai/home/e55e27e5-e784-4dfe-bdb9-43938c2d2674/f8b86f81-94b5-4948-80b9-45b0ede03985"
data-readdy="true"
className="text-green-600 text-sm font-medium"
>
View All History
</a>
</div>
</div>
</div>
)}
</div>
</div>
{/* Tab Bar */}
<div className="fixed bottom-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
<div className="grid grid-cols-4 h-16">
<button className="flex flex-col items-center justify-center cursor-pointer">
<i className="fas fa-home text-gray-400 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">Home</span>
</button>
<a
href="https://readdy.ai/home/e55e27e5-e784-4dfe-bdb9-43938c2d2674/f8b86f81-94b5-4948-80b9-45b0ede03985"
data-readdy="true"
className="flex flex-col items-center justify-center cursor-pointer"
>
<i className="fas fa-camera text-green-600 text-xl"></i>
<span className="text-xs text-green-600 font-medium mt-1">Diagnose</span>
</a>
<a
href="https://readdy.ai/home/e55e27e5-e784-4dfe-bdb9-43938c2d2674/0cd67c93-a396-4778-910e-9e4cd98c5887"
data-readdy="true"
className="flex flex-col items-center justify-center cursor-pointer"
>
<i className="fas fa-leaf text-gray-400 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">My Plants</span>
</a>
<button className="flex flex-col items-center justify-center cursor-pointer">
<i className="fas fa-user text-gray-400 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">Profile</span>
</button>
</div>
</div>
</div>
);
};
export default App
