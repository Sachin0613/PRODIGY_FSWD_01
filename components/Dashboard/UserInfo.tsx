import React from 'react';
import { useAuth } from '../../context/AuthContext';

export function UserInfo() {
  const { user } = useAuth();
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <p className="mb-2">Welcome to your dashboard, {user?.name}!</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}