export interface Meal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: MealCategory;
  timestamp: Date;
}

export type MealCategory = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface DailyNutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}