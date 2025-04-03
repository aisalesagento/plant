// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [language, setLanguage] = useState('English');

  const userStats = {
    totalPlants: 6,
    healthyPlants: 4,
    needsAttention: 2,
    recentDiagnoses: 3
  };

  const achievements = [
    { id: 1, name: 'Plant Collector', icon: 'fa-medal', progress: 100, description: 'Add 5 plants to your collection' },
    { id: 2, name: 'Green Thumb', icon: 'fa-seedling', progress: 80, description: 'Keep 3 plants healthy for a month' },
    { id: 3, name: 'Plant Doctor', icon: 'fa-stethoscope', progress: 60, description: 'Successfully diagnose 10 plant issues' },
    { id: 4, name: 'Early Riser', icon: 'fa-sun', progress: 40, description: 'Log in 7 days in a row' },
    { id: 5, name: 'Plant Explorer', icon: 'fa-compass', progress: 20, description: 'Add plants from 5 different categories' }
  ];

  const toggleSwitch = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(prev => !prev);
  };

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="bg-green-600 text-white fixed w-full top-0 z-50 shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <i className="fas fa-leaf text-xl mr-2"></i>
            <span className="font-bold text-lg">PlantGuard</span>
          </div>
          <button className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium !rounded-button cursor-pointer">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 pb-20">
        {/* Profile Header */}
        <div className="flex flex-col items-center px-4 py-6 bg-white shadow-sm mb-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-100 mb-3">
              <img 
                src="https://public.readdy.ai/ai/img_res/3f7a0b7e8c9d2f1e4a5b6c0d9e8f7a6b.jpg"
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-2 right-0 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer !rounded-button">
              <i className="fas fa-camera text-sm"></i>
            </button>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Emily Johnson</h2>
          <p className="text-gray-500 text-sm mb-3">emily.johnson@example.com</p>
          <button className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-medium flex items-center cursor-pointer !rounded-button">
            <i className="fas fa-pen text-xs mr-2"></i>
            Edit Profile
          </button>
        </div>

        {/* Stats Section */}
        <div className="px-4 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Plant Statistics</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <i className="fas fa-leaf text-green-600"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Plants</p>
                  <p className="text-xl font-semibold text-gray-800">{userStats.totalPlants}</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <i className="fas fa-heart text-green-600"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Healthy Plants</p>
                  <p className="text-xl font-semibold text-gray-800">{userStats.healthyPlants}</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-green-600 h-1.5 rounded-full" style={{ width: `${(userStats.healthyPlants / userStats.totalPlants) * 100}%` }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <i className="fas fa-exclamation-triangle text-yellow-600"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Needs Attention</p>
                  <p className="text-xl font-semibold text-gray-800">{userStats.needsAttention}</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: `${(userStats.needsAttention / userStats.totalPlants) * 100}%` }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <i className="fas fa-stethoscope text-blue-600"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Recent Diagnoses</p>
                  <p className="text-xl font-semibold text-gray-800">{userStats.recentDiagnoses}</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="px-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-medium text-gray-800">Achievements</h3>
            <button className="text-green-600 text-sm font-medium cursor-pointer">View All</button>
          </div>
          
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex space-x-3 min-w-max pb-2">
              {achievements.map(achievement => (
                <div key={achievement.id} className="bg-white rounded-xl p-3 shadow-sm w-32 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                    achievement.progress === 100 ? 'bg-green-600' : 'bg-gray-200'
                  }`}>
                    <i className={`fas ${achievement.icon} ${
                      achievement.progress === 100 ? 'text-white' : 'text-gray-400'
                    } text-lg`}></i>
                  </div>
                  <p className="text-sm font-medium text-center text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-overflow-ellipsis">{achievement.name}</p>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                    <div className="bg-green-600 h-1.5 rounded-full" style={{ width: `${achievement.progress}%` }}></div>
                  </div>
                  <p className="text-xs text-center text-gray-500">{achievement.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="px-4 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Account Settings</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-gray-100">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <i className="fas fa-bell text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Notifications</span>
                </div>
                <button 
                  className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none cursor-pointer ${notificationsEnabled ? 'bg-green-600 justify-end' : 'bg-gray-300 justify-start'}`}
                  onClick={() => toggleSwitch(setNotificationsEnabled)}
                >
                  <span className="w-5 h-5 rounded-full bg-white shadow-md transform mx-0.5"></span>
                </button>
              </div>
            </div>

            <div className="border-b border-gray-100">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <i className="fas fa-moon text-purple-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Dark Mode</span>
                </div>
                <button 
                  className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none cursor-pointer ${darkModeEnabled ? 'bg-green-600 justify-end' : 'bg-gray-300 justify-start'}`}
                  onClick={() => toggleSwitch(setDarkModeEnabled)}
                >
                  <span className="w-5 h-5 rounded-full bg-white shadow-md transform mx-0.5"></span>
                </button>
              </div>
            </div>

            <div className="border-b border-gray-100">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <i className="fas fa-globe text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Language</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 text-sm mr-2">{language}</span>
                  <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <i className="fas fa-cog text-orange-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">App Preferences</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Management Section */}
        <div className="px-4 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Account Management</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button 
              className="w-full flex items-center p-4 border-b border-gray-100 cursor-pointer"
              onClick={() => setShowLogoutConfirm(true)}
            >
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <i className="fas fa-sign-out-alt text-red-600 text-sm"></i>
              </div>
              <span className="text-red-600">Logout</span>
            </button>
            <button 
              className="w-full flex items-center p-4 cursor-pointer"
              onClick={() => setShowDeleteConfirm(true)}
            >
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <i className="fas fa-trash-alt text-red-600 text-sm"></i>
              </div>
              <span className="text-red-600">Delete Account</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="fixed bottom-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
        <div className="grid grid-cols-4 h-16">
          <button className="flex flex-col items-center justify-center cursor-pointer">
            <i className="fas fa-home text-gray-400 text-xl"></i>
            <span className="text-xs text-gray-600 mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center cursor-pointer">
            <i className="fas fa-camera text-gray-400 text-xl"></i>
            <span className="text-xs text-gray-600 mt-1">Diagnose</span>
          </button>
          <a
            href="https://readdy.ai/home/e55e27e5-e784-4dfe-bdb9-43938c2d2674/0cd67c93-a396-4778-910e-9e4cd98c5887"
            data-readdy="true"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <i className="fas fa-leaf text-gray-400 text-xl"></i>
            <span className="text-xs text-gray-600 mt-1">My Plants</span>
          </a>
          <button className="flex flex-col items-center justify-center cursor-pointer">
            <i className="fas fa-user text-green-600 text-xl"></i>
            <span className="text-xs text-green-600 font-medium mt-1">Profile</span>
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-5 w-full max-w-xs">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Logout</h3>
            <p className="text-gray-600 mb-5">Are you sure you want to logout from your account?</p>
            <div className="flex space-x-3">
              <button 
                className="flex-1 py-2.5 rounded-lg bg-gray-100 text-gray-700 font-medium cursor-pointer !rounded-button"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>
              <button className="flex-1 py-2.5 rounded-lg bg-red-600 text-white font-medium cursor-pointer !rounded-button">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-5 w-full max-w-xs">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <i className="fas fa-exclamation-triangle text-red-600"></i>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Delete Account</h3>
            <p className="text-gray-600 mb-5 text-center text-sm">This action cannot be undone. All your data will be permanently removed.</p>
            <div className="flex space-x-3">
              <button 
                className="flex-1 py-2.5 rounded-lg bg-gray-100 text-gray-700 font-medium cursor-pointer !rounded-button"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button className="flex-1 py-2.5 rounded-lg bg-red-600 text-white font-medium cursor-pointer !rounded-button">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

