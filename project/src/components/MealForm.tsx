import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Meal, MealCategory } from '../types';

interface MealFormProps {
  onAddMeal: (meal: Omit<Meal, 'id' | 'timestamp'>) => void;
}

export function MealForm({ onAddMeal }: MealFormProps) {
  const [meal, setMeal] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    category: 'breakfast' as MealCategory,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddMeal({
      name: meal.name,
      calories: Number(meal.calories),
      protein: Number(meal.protein),
      carbs: Number(meal.carbs),
      fat: Number(meal.fat),
      category: meal.category,
    });
    setMeal({
      name: '',
      calories: '',
      protein: '',
      carbs: '',
      fat: '',
      category: 'breakfast',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Meal</h2>
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Meal Name</label>
          <input
            type="text"
            value={meal.name}
            onChange={(e) => setMeal({ ...meal, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={meal.category}
            onChange={(e) => setMeal({ ...meal, category: e.target.value as MealCategory })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Calories</label>
            <input
              type="number"
              value={meal.calories}
              onChange={(e) => setMeal({ ...meal, calories: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Protein (g)</label>
            <input
              type="number"
              value={meal.protein}
              onChange={(e) => setMeal({ ...meal, protein: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Carbs (g)</label>
            <input
              type="number"
              value={meal.carbs}
              onChange={(e) => setMeal({ ...meal, carbs: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fat (g)</label>
            <input
              type="number"
              value={meal.fat}
              onChange={(e) => setMeal({ ...meal, fat: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Add Meal
      </button>
    </form>
  );
}