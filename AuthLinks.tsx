import React from 'react';
import { Link } from 'react-router-dom';

export function AuthLinks() {
  return (
    <>
      <Link to="/login" className="hover:text-gray-300">
        Login
      </Link>
      <Link to="/register" className="hover:text-gray-300">
        Register
      </Link>
    </>
  );
}