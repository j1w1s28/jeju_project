from crypt import methods
from unittest import result
from flask import Flask, request, session, render_template, redirect, url_for
import sqlite3
import math
import pandas as pd
import json

app = Flask(__name__)

@app.route('/')
def stay():
    stay = pd.read_csv('./data/jeju_stay_modified.csv').T.to_dict()
    return render_template('test.html',result=stay)

if __name__ == '__main__':
    app.run(debug = True)
   

