import React, { useState } from 'react';
import { MealForm } from './components/MealForm';
import { MealList } from './components/MealList';
import { NutritionSummary } from './components/NutritionSummary';
import { Meal } from './types';
import { Salad } from 'lucide-react';
import { calculateDailyNutrition } from './utils/nutrition';
import { formatDate } from './utils/dates';

function App() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const handleAddMeal = (newMeal: Omit<Meal, 'id' | 'timestamp'>) => {
    const meal: Meal = {
      ...newMeal,
      id: crypto.randomUUID(),
      timestamp: new Date(),
    };
    setMeals([...meals, meal]);
  };

  const handleDeleteMeal = (id: string) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  const dailyNutrition = calculateDailyNutrition(meals);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center">
            <Salad className="w-8 h-8 text-green-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Diet Tracker</h1>
          </div>
          <p className="mt-2 text-gray-600">{formatDate(new Date())}</p>
        </div>
        
        <div className="grid gap-8">
          <NutritionSummary dailyNutrition={dailyNutrition} />
          
          <div className="grid md:grid-cols-2 gap-8">
            <MealForm onAddMeal={handleAddMeal} />
            <MealList meals={meals} onDeleteMeal={handleDeleteMeal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;