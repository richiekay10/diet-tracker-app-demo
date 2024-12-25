import React, { useState } from 'react';
import { Meal, MealCategory } from '../types';
import { Trash2, Search } from 'lucide-react';
import { formatTime } from '../utils/dates';

interface MealListProps {
  meals: Meal[];
  onDeleteMeal: (id: string) => void;
}

export function MealList({ meals, onDeleteMeal }: MealListProps) {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<MealCategory | 'all'>('all');

  const filteredMeals = meals.filter(meal => {
    const matchesSearch = meal.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || meal.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categoryColors = {
    breakfast: 'bg-yellow-100 text-yellow-800',
    lunch: 'bg-green-100 text-green-800',
    dinner: 'bg-blue-100 text-blue-800',
    snack: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Today's Meals</h2>
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search meals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as MealCategory | 'all')}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>

        <div className="space-y-3">
          {filteredMeals.map((meal) => (
            <div
              key={meal.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-gray-900">{meal.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[meal.category]}`}>
                    {meal.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {meal.calories} cal | {meal.protein}g protein | {meal.carbs}g carbs | {meal.fat}g fat
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatTime(meal.timestamp)}
                </p>
              </div>
              <button
                onClick={() => onDeleteMeal(meal.id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          {filteredMeals.length === 0 && (
            <p className="text-center text-gray-500 py-4">
              {meals.length === 0 ? 'No meals added yet' : 'No meals match your search'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}