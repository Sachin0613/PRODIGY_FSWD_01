import React from 'react';

interface FormErrorProps {
  error: string;
}

export function FormError({ error }: FormErrorProps) {
  if (!error) return null;
  
  return (
    <div className="text-red-600 text-sm">{error}</div>
  );
}