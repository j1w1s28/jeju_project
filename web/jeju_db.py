import pymysql

def db_connect(sql):
    db = pymysql.connect(host = "localhost", user = "root", password = "rootpass", db = "jeju", charset = "utf8")
    cur = db.cursor(pymysql.cursors.DictCursor)
    cur.execute(sql)

    rows = cur.fetchall()
    return rows

    db.commit()
    db.close()