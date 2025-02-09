import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { Button } from 'flowbite-react';

const Home = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center bg-purple-500 p-6 rounded">
                <h1 className="text-3xl font-bold mb-8">Welcome to the HomePage</h1>
                <div className="space-y-4">
                    <button className="w-full bg-white hover:bg-gray-300 p-2 rounded" onClick={() => navigateTo('/admin-dashboard')}>
                        Admin/PM Flow
                    </button>
                    <button className="w-full bg-white hover:bg-gray-300 p-2 rounded" onClick={() => navigateTo('/em-dashboard')}>
                        Employee Flow
                    </button>
                    <button className="w-full bg-white hover:bg-gray-300 p-2 rounded" onClick={() => navigateTo('/pm-dashboard')}>
                        PM Flow
                    </button>
                    <button className="w-full bg-white hover:bg-gray-300 p-2 rounded" onClick={() => navigateTo('/cxo-dashboard')}>
                        CXO Flow 
                    </button>
                    <button className="w-full bg-white hover:bg-gray-300 p-2 rounded" onClick={() => navigateTo('/employeeManager-dashboard')}>
                        Employee Manager flow
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
