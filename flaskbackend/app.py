from flask import Flask, request, jsonify
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.neighbors import KNeighborsClassifier

app = Flask(__name__)

def load_and_process_data(file_path):
    data = pd.read_csv(file_path, compression='gzip')
    columns = ['RecipeId', 'Name', 'CookTime', 'PrepTime', 'TotalTime', 'RecipeIngredientParts', 'Calories',
               'FatContent', 'SaturatedFatContent', 'CholesterolContent', 'SodiumContent', 'CarbohydrateContent',
               'FiberContent', 'SugarContent', 'ProteinContent', 'RecipeInstructions']
    dataset = data[columns]

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

    extracted_data = dataset.copy()
    for column, maximum in zip(extracted_data.columns[6:15], max_list):
        extracted_data = extracted_data[extracted_data[column] < maximum]

    ed = extracted_data.iloc[:20000, 6:16]
    ed.reset_index(drop=True, inplace=True)
    
    return ed

def predict_recipe_instructions(input_data):
    file_path = 'dataset.csv'
    data = load_and_process_data(file_path)

    def assign_body_type(protein_content):
        if protein_content < 20:
            return 'ectomorph'
        elif protein_content < 30:
            return 'mesomorph'
        else:
            return 'endomorph'

    def assign_goal(protein_content):
        if protein_content < 20:
            return 'weight_loss'
        elif protein_content < 30:
            return 'muscle_gain'
        else:
            return 'maintenance'

    data['body_type'] = data['ProteinContent'].apply(assign_body_type)
    data['goal'] = data['ProteinContent'].apply(assign_goal)

    # data['ProteinCategory'] = pd.cut(data['ProteinContent'], bins=3, labels=['low', 'medium', 'high'])

    df = data[['RecipeInstructions', 'body_type', 'goal', 'Calories', 'FatContent', 'SaturatedFatContent', 
                'CholesterolContent', 'SodiumContent', 'CarbohydrateContent', 
                'FiberContent', 'SugarContent']]

    df_encoded = pd.get_dummies(df, columns=['body_type', 'goal'])

    X = df_encoded.drop(columns=['RecipeInstructions'])
    y = df_encoded['RecipeInstructions']

    scaler = MinMaxScaler()
    X_normalized = scaler.fit_transform(X)

    knn = KNeighborsClassifier(n_neighbors=5)
    knn.fit(X_normalized, y)

    input_df = pd.DataFrame(input_data, index=[0])
    input_df_encoded = pd.get_dummies(input_df, columns=['body_type', 'goal'])
    input_normalized = scaler.transform(input_df_encoded)
    predicted_output = knn.predict(input_normalized)
    
    return predicted_output

@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.json
        predictions = predict_recipe_instructions(input_data)
        return jsonify({"predictions": predictions.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
