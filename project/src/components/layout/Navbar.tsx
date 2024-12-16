import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, MessageSquare, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/compress', icon: FileText, label: 'Compress' },
    { path: '/feedback', icon: MessageSquare, label: 'Feedback' },
    { path: '/contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">DataCompress</span>
          </div>
          
          <div className="flex space-x-8">
            {links.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 text-sm font-medium ${
                  location.pathname === path
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="h-5 w-5 mr-1" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;