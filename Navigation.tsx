import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserMenu } from './UserMenu';
import { AuthLinks } from './AuthLinks';

export function Navigation() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? <UserMenu /> : <AuthLinks />}
        </div>
      </div>
    </nav>
  );
}