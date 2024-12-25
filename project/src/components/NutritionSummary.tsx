import React from 'react';
import { DailyNutrition } from '../types';
import { Utensils } from 'lucide-react';
import { ProgressRing } from './ProgressRing';
import { calculateProgress } from '../utils/nutrition';

interface NutritionSummaryProps {
  dailyNutrition: DailyNutrition;
}

const DAILY_GOALS = {
  calories: 2000,
  protein: 150,
  carbs: 250,
  fat: 70,
};

export function NutritionSummary({ dailyNutrition }: NutritionSummaryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <Utensils className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold">Daily Summary</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="relative flex flex-col items-center">
          <ProgressRing 
            progress={calculateProgress(dailyNutrition.calories, DAILY_GOALS.calories)} 
            color="#3B82F6"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-blue-600">{dailyNutrition.calories}</span>
            <span className="text-sm text-gray-500">/ {DAILY_GOALS.calories}</span>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">Calories</p>
        </div>
        
        <div className="relative flex flex-col items-center">
          <ProgressRing 
            progress={calculateProgress(dailyNutrition.protein, DAILY_GOALS.protein)} 
            color="#10B981"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-green-600">{dailyNutrition.protein}g</span>
            <span className="text-sm text-gray-500">/ {DAILY_GOALS.protein}g</span>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">Protein</p>
        </div>
        
        <div className="relative flex flex-col items-center">
          <ProgressRing 
            progress={calculateProgress(dailyNutrition.carbs, DAILY_GOALS.carbs)} 
            color="#FBBF24"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-yellow-500">{dailyNutrition.carbs}g</span>
            <span className="text-sm text-gray-500">/ {DAILY_GOALS.carbs}g</span>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">Carbs</p>
        </div>
        
        <div className="relative flex flex-col items-center">
          <ProgressRing 
            progress={calculateProgress(dailyNutrition.fat, DAILY_GOALS.fat)} 
            color="#EF4444"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-red-500">{dailyNutrition.fat}g</span>
            <span className="text-sm text-gray-500">/ {DAILY_GOALS.fat}g</span>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-600">Fat</p>
        </div>
      </div>
    </div>
  );
}