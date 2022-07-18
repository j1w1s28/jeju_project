from flask import Flask, request, render_template, jsonify
import pandas as pd

app = Flask(__name__)

def food_map():
    data = pd.read_csv('./data/jeju_food_modified.csv').T.to_dict()
    data = (data, len(data))
    return data

@app.route('/')
def home():
    data = food_map()
    return render_template('jeju_food.html', result=data)

if __name__ == '__main__':
    app.run(debug=True)