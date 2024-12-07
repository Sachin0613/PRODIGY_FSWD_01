import React from 'react';
import { useAuth } from '../../context/AuthContext';

export function UserMenu() {
  const { logout, user } = useAuth();

  return (
    <>
      <span>Welcome, {user?.name}</span>
      <button
        onClick={logout}
        className="text-white hover:text-gray-300"
      >
        Logout
      </button>
    </>
  );
}