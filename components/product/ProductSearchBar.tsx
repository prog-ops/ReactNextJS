'use client'

import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
      <div className='flex flex-col mt-5'>
        <h3 className='mr-4'>Search</h3>
        <div className='mt-2'>
          <input
              className='rounded bg-slate-400 p-1'
              type='text'
              placeholder='Search...'
              value={value}
              onChange={onChange}
          />
        </div>
      </div>
  );
};

export default SearchBar;
