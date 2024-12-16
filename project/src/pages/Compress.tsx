import React, { useState, useEffect } from 'react';
import { useSearchParams, Navigate } from 'react-router-dom';
import { onAuthChange } from '../utils/auth';
import AuthForm from '../components/auth/AuthForm';
import SecureFileHandler from '../components/compression/SecureFileHandler';
import type { FileType } from '../types';

const Compress = () => {
  const [searchParams] = useSearchParams();
  const fileType = (searchParams.get('type') as FileType) || 'document';
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <AuthForm onSuccess={() => {}} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {fileType.charAt(0).toUpperCase() + fileType.slice(1)} Compression
          </h1>
          
          <SecureFileHandler
            userId={user.uid}
            mode="compress"
          />
        </div>
      </div>
    </div>
  );
};

export default Compress;