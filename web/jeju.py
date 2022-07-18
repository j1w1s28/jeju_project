from crypt import methods
from flask import Flask, request, session, render_template, redirect, url_for
import sqlite3
import math

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('test.html')

if __name__ == '__main__':
    app.run(debug = True)
   

