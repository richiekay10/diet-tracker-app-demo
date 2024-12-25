import { Meal } from '../types';

export function calculateDailyNutrition(meals: Meal[]) {
  return meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

export function calculateProgress(current: number, goal: number): number {
  return Math.min(Math.round((current / goal) * 100), 100);
}