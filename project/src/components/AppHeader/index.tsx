import React from 'react';
import { Salad } from 'lucide-react';
import { formatDate } from '../../utils/dates';

export function AppHeader() {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center">
        <Salad className="w-8 h-8 text-green-600 mr-2" />
        <h1 className="text-3xl font-bold text-gray-900">Diet Tracker</h1>
      </div>
      <p className="mt-2 text-gray-600">{formatDate(new Date())}</p>
    </div>
  );
}