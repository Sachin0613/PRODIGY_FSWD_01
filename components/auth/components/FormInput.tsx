import React from 'react';

interface FormInputProps {
  type: 'text' | 'email' | 'password';
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export function FormInput({ 
  type, 
  name, 
  label, 
  placeholder, 
  required = true 
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
        transition duration-150 ease-in-out"
      />
    </div>
  );
}