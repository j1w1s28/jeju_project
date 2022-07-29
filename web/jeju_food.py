from flask import Flask, request, render_template, jsonify
import pandas as pd
import jeju_db

app = Flask(__name__)

def db_data():
    sql = "select* from (select * from jeju_data where longitude != 'None' or latitude != 'None' order by rand() limit 50) A order by A.title"
    data = jeju_db.db_connect(sql)
    data = pd.DataFrame(data).T.to_dict()
    return [data, len(data)]


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/main')
def mapList():
    data = db_data()
    data.append(request.args.get('pos'))
    return render_template('graphPage.html', result=data)

if __name__ == '__main__':
    app.run(debug=True)