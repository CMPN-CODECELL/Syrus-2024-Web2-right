from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
import pandas as pd

def load_and_process_data(file_path):
    # Load the dataset
    data = pd.read_csv(file_path, compression='gzip')

    # Select columns of interest
    columns = ['RecipeId', 'Name', 'CookTime', 'PrepTime', 'TotalTime', 'RecipeIngredientParts', 'Calories',
               'FatContent', 'SaturatedFatContent', 'CholesterolContent', 'SodiumContent', 'CarbohydrateContent',
               'FiberContent', 'SugarContent', 'ProteinContent', 'RecipeInstructions']
    dataset = data[columns]

    # Define maximum values for each nutrient
    max_Calories = 2000
    max_daily_fat = 100
    max_daily_Saturatedfat = 13
    max_daily_Cholesterol = 300
    max_daily_Sodium = 2300
    max_daily_Carbohydrate = 325
    max_daily_Fiber = 40
    max_daily_Sugar = 40
    max_daily_Protein = 200
    max_list = [max_Calories, max_daily_fat, max_daily_Saturatedfat, max_daily_Cholesterol, max_daily_Sodium,
                max_daily_Carbohydrate, max_daily_Fiber, max_daily_Sugar, max_daily_Protein]

    # Filter dataset based on maximum values
    extracted_data = dataset.copy()
    for column, maximum in zip(extracted_data.columns[6:15], max_list):
        extracted_data = extracted_data[extracted_data[column] < maximum]

    # Extract only the required columns and rows
    ed = extracted_data.iloc[:20000, 6:16]
    ed.reset_index(drop=True, inplace=True)
    
    return ed

# Example usage:
file_path = 'dataset.csv'
ed = load_and_process_data(file_path)
print(ed)

