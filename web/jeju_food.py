from flask import Flask, request, render_template, jsonify
import jeju_db

app = Flask(__name__)

def db_data():
    sql = "select * from jeju_data_web where x != 'None' or y != 'None'"
    data = jeju_db.db_connect(sql)
    return [data, len(data)]


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/main')
def mapList():
    data = db_data()
    data.append(request.args.get('pos'))
    return render_template('weather.html', result=data)

if __name__ == '__main__':
    app.run(debug=True)