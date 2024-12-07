import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { UserInfo } from './UserInfo';

export function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <UserInfo />
    </div>
  );
}