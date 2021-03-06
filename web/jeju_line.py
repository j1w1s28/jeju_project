from crypt import methods
from unittest import result
from flask import Flask, request, session, render_template, redirect, url_for
import pandas as pd
import json
import jeju_db
import folium
import folium.plugins

app = Flask(__name__)

def map():
    sql = "select * from jeju_data limit 15"
    data = jeju_db.db_connect(sql)
    data = pd.DataFrame(data).T.to_dict()
    return (data, len(data))

@app.route('/')
def home():
    data = map()
    return render_template('jeju_line.html',result=data)

if __name__ == '__main__':
    app.run(debug = True)
   