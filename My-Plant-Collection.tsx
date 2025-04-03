// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef } from 'react';
const App: React.FC = () => {
const [searchTerm, setSearchTerm] = useState('');
const [activeCategory, setActiveCategory] = useState('All');
const [filterOpen, setFilterOpen] = useState(false);
const [sortOption, setSortOption] = useState('Recently Added');
const categories = [
'All', 'Indoor', 'Outdoor', 'Herbs', 'Succulents', 'Flowering', 'Tropical'
];
const plants = [
{
id: 1,
name: 'Monstera Deliciosa',
image: "https://public.readdy.ai/ai/img_res/97a59ec6d1a02c612468ff12274f8111.jpg",
health: 'good',
lastDiagnosis: 'April 1, 2025',
wateringSchedule: 'Every 7 days',
nextWatering: 'April 9, 2025',
location: 'Living Room',
type: 'Indoor'
},
{
id: 2,
name: 'Snake Plant',
image: "https://public.readdy.ai/ai/img_res/7c7db9a4f963fcc8186216d921ecf172.jpg",
health: 'good',
lastDiagnosis: 'March 28, 2025',
wateringSchedule: 'Every 14 days',
nextWatering: 'April 11, 2025',
location: 'Bedroom',
type: 'Indoor'
},
{
id: 3,
name: 'Fiddle Leaf Fig',
image: "https://public.readdy.ai/ai/img_res/68c76f423b2935b0c701104437193003.jpg",
health: 'moderate',
lastDiagnosis: 'March 25, 2025',
wateringSchedule: 'Every 10 days',
nextWatering: 'April 4, 2025',
location: 'Office',
type: 'Indoor'
},
{
id: 4,
name: 'Basil',
image: "https://public.readdy.ai/ai/img_res/ae3126390e81c45027bc16163811e26f.jpg",
health: 'good',
lastDiagnosis: 'March 30, 2025',
wateringSchedule: 'Every 3 days',
nextWatering: 'April 3, 2025',
location: 'Kitchen',
type: 'Herbs'
},
{
id: 5,
name: 'Aloe Vera',
image: "https://public.readdy.ai/ai/img_res/91d4fce63ad61cbaf550918d6e7aa567.jpg",
health: 'good',
lastDiagnosis: 'March 22, 2025',
wateringSchedule: 'Every 21 days',
nextWatering: 'April 12, 2025',
location: 'Bathroom',
type: 'Succulents'
},
{
id: 6,
name: 'Peace Lily',
image: "https://public.readdy.ai/ai/img_res/1abeec43e07a7e4e28036c090f7e8218.jpg",
health: 'poor',
lastDiagnosis: 'April 2, 2025',
wateringSchedule: 'Every 5 days',
nextWatering: 'April 7, 2025',
location: 'Dining Room',
type: 'Flowering'
}
];
const filteredPlants = plants
.filter(plant =>
(activeCategory === 'All' || plant.type === activeCategory) &&
plant.name.toLowerCase().includes(searchTerm.toLowerCase())
)
.sort((a, b) => {
if (sortOption === 'Alphabetical') {
return a.name.localeCompare(b.name);
} else if (sortOption === 'Health Status') {
const healthOrder = { good: 0, moderate: 1, poor: 2 };
return healthOrder[a.health as keyof typeof healthOrder] - healthOrder[b.health as keyof typeof healthOrder];
}
// Default: Recently Added (by id)
return b.id - a.id;
});
const getHealthColor = (health: string) => {
switch(health) {
case 'good': return 'bg-green-500';
case 'moderate': return 'bg-yellow-500';
case 'poor': return 'bg-red-500';
default: return 'bg-gray-500';
}
};
const [expandedPlantId, setExpandedPlantId] = useState<number | null>(null);
const handlePlantClick = (id: number) => {
setExpandedPlantId(expandedPlantId === id ? null : id);
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
<button className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium !rounded-button cursor-pointer">
Login
</button>
</div>
</nav>
{/* Main Content */}
<div className="pt-16 pb-20">
{/* Search and Filter Section */}
<div className="px-4 pt-3 pb-2 sticky top-16 bg-gray-50 z-40">
<div className="relative mb-3">
<input
type="text"
placeholder="Search your plants..."
className="w-full py-2.5 pl-10 pr-4 bg-white rounded-lg shadow-sm border-none text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
<i className="fas fa-search absolute left-3.5 top-3 text-gray-400"></i>
<button
className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
onClick={() => setFilterOpen(!filterOpen)}
>
<i className="fas fa-sliders-h"></i>
</button>
</div>
{filterOpen && (
<div className="bg-white rounded-lg shadow-md p-3 mb-3 absolute right-4 top-14 w-48 z-50">
<h4 className="text-sm font-medium text-gray-700 mb-2">Sort by:</h4>
{['Recently Added', 'Alphabetical', 'Health Status'].map(option => (
<div
key={option}
className="flex items-center mb-2 cursor-pointer"
onClick={() => {
setSortOption(option);
setFilterOpen(false);
}}
>
<div className={`w-4 h-4 rounded-full border ${sortOption === option ? 'border-green-600' : 'border-gray-300'} flex items-center justify-center mr-2`}>
{sortOption === option && <div className="w-2 h-2 rounded-full bg-green-600"></div>}
</div>
<span className="text-sm text-gray-700">{option}</span>
</div>
))}
</div>
)}
<div className="overflow-x-auto -mx-4 px-4 pb-2">
<div className="flex space-x-2 min-w-max">
{categories.map(category => (
<button
key={category}
className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap cursor-pointer !rounded-button ${
activeCategory === category
? 'bg-green-600 text-white'
: 'bg-white text-gray-700'
}`}
onClick={() => setActiveCategory(category)}
>
{category}
</button>
))}
</div>
</div>
</div>
{/* Plant Collection */}
<div className="px-4 pt-1">
{filteredPlants.length > 0 ? (
<div className="grid grid-cols-2 gap-3">
{filteredPlants.map(plant => (
<div key={plant.id} className="cursor-pointer">
<div
className={`bg-white rounded-xl shadow-sm overflow-hidden ${expandedPlantId === plant.id ? 'ring-2 ring-green-500' : ''}`}
onClick={() => handlePlantClick(plant.id)}
>
<div className="relative">
<img
src={plant.image}
alt={plant.name}
className="w-full aspect-square object-cover object-top"
/>
<div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full p-1.5 shadow-sm">
<i className="fas fa-ellipsis-v text-gray-600 text-xs"></i>
</div>
</div>
<div className="p-2.5">
<div className="flex items-center mb-1">
<span className={`w-2.5 h-2.5 rounded-full ${getHealthColor(plant.health)} mr-1.5`}></span>
<h3 className="font-medium text-gray-800 text-sm truncate">{plant.name}</h3>
</div>
<p className="text-xs text-gray-500 mb-1">Last check: {plant.lastDiagnosis}</p>
{expandedPlantId === plant.id && (
<div className="mt-2 pt-2 border-t border-gray-100">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs text-gray-600">Watering:</span>
<span className="text-xs font-medium text-gray-700">{plant.wateringSchedule}</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs text-gray-600">Next:</span>
<span className="text-xs font-medium text-gray-700">{plant.nextWatering}</span>
</div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs text-gray-600">Location:</span>
<span className="text-xs font-medium text-gray-700">{plant.location}</span>
</div>
<div className="flex justify-between mt-3">
<button className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded !rounded-button cursor-pointer">
<i className="fas fa-bell mr-1"></i>
Remind
</button>
<a
href="https://readdy.ai/home/e55e27e5-e784-4dfe-bdb9-43938c2d2674/aca619ed-7d09-44af-a914-8b1db4ba2e7a"
data-readdy="true"
className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded !rounded-button cursor-pointer"
>
<i className="fas fa-stethoscope mr-1"></i>
Diagnose
</a>
</div>
</div>
)}
</div>
</div>
</div>
))}
</div>
) : (
<div className="flex flex-col items-center justify-center py-12">
<img
src="https://public.readdy.ai/ai/img_res/59fe45f48edc68caebcf654392192ec8.jpg"
alt="No plants found"
className="w-32 h-32 mb-4"
/>
<h3 className="font-medium text-gray-700 mb-1">No plants found</h3>
<p className="text-sm text-gray-500 text-center mb-4">
{searchTerm ? 'Try a different search term' : 'Add your first plant to get started'}
</p>
<button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium !rounded-button cursor-pointer">
<i className="fas fa-plus mr-2"></i>
Add Your First Plant
</button>
</div>
)}
</div>
</div>
{/* Add New Plant Button */}
{filteredPlants.length > 0 && (
<button className="fixed right-4 bottom-20 w-14 h-14 bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white z-40 cursor-pointer !rounded-button">
<i className="fas fa-plus text-xl"></i>
</button>
)}
{/* Tab Bar */}
<div className="fixed bottom-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
<div className="grid grid-cols-4 h-16">
<button className="flex flex-col items-center justify-center cursor-pointer">
<i className="fas fa-home text-gray-400 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">Home</span>
</button>
<a
href="https://readdy.ai/home/e55e27e5-e784-4dfe-bdb9-43938c2d2674/aca619ed-7d09-44af-a914-8b1db4ba2e7a"
data-readdy="true"
className="flex flex-col items-center justify-center cursor-pointer"
>
<i className="fas fa-camera text-gray-400 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">Diagnose</span>
</a>
<div className="flex flex-col items-center justify-center cursor-pointer">
<i className="fas fa-leaf text-green-600 text-xl"></i>
<span className="text-xs text-green-600 font-medium mt-1">My Plants</span>
</div>
<a
href="https://readdy.ai/home/e55e27e5-e784-4dfe-bdb9-43938c2d2674/d016793a-1c2d-4a05-8999-7f90290b64aa"
data-readdy="true"
className="flex flex-col items-center justify-center cursor-pointer"
>
<i className="fas fa-user text-gray-400 text-xl"></i>
<span className="text-xs text-gray-600 mt-1">Profile</span>
</a>
</div>
</div>
</div>
);
};
export default App
