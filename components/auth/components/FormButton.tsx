import React from 'react';

interface FormButtonProps {
  isLoading: boolean;
  loadingText: string;
  text: string;
}

export function FormButton({ isLoading, loadingText, text }: FormButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white 
      bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      disabled:opacity-50 transition-colors duration-200 ease-in-out transform hover:scale-[1.02]"
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {isLoading ? loadingText : text}
    </button>
  );
}