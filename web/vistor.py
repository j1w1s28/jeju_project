from flask import Flask, render_template, request, flash, redirect, jsonify
import csv, datetime
import pandas as pd
import json
import plotly
import plotly.graph_objs as go
import pandas as pd
import numpy as np

import flask
app = Flask(__name__)


def visitors():
    data = pd.read_csv('./data/visitors_data.csv').T.to_dict()
    data = (data, len(data))
    return data

@app.route('/')
def visitors_chart():
    data = visitors()
    return render_template('visitors.html',result=data)


    

if __name__ == '__main__':
    app.run(debug=True)