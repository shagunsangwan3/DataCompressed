import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Image, Video, Folder } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Folder,
      title: 'Folder Compression',
      description: 'Compress entire folders while maintaining structure',
      path: '/compress?type=folder'
    },
    {
      icon: Image,
      title: 'Image Compression',
      description: 'Optimize images without quality loss',
      path: '/compress?type=image'
    },
    {
      icon: Video,
      title: 'Video Compression',
      description: 'Reduce video size while preserving quality',
      path: '/compress?type=video'
    },
    {
      icon: FileText,
      title: 'Document Compression',
      description: 'Compress documents and other file types',
      path: '/compress?type=document'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Data Compression Tool
          </h1>
          <p className="text-xl text-gray-600">
            Compress your files efficiently without losing quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.path}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose Our Compression Tool?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Lossless Compression</h3>
              <p className="text-gray-600">Maintain data integrity with our advanced algorithms</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Batch Processing</h3>
              <p className="text-gray-600">Compress multiple files and folders simultaneously</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data never leaves your browser</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;