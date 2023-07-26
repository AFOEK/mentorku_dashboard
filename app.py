from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re
import os
import hashlib

load_dotenv()

app = Flask(__name__)
app.config['MYSQL_HOST'] = ''.join(os.environ.get("SQL_HOST"))
app.config['MYSQL_USER'] = ''.join(os.environ.get("SQL_USER"))
app.config['MYSQL_PASSWD'] = ''.join(os.environ.get("SQL_PASSWD"))
app.config['MYSQL_DB'] = ''.join(os.environ.get("SQL_DB"))
mysql = MySQL(app)

@app.route('/login', methods=["POST","GET"])
def login():
    if request.method == 'POST':
        data = request.get_json()
        username = data["username"]
        passwd = data["passwd"]
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("SELECT username, userid, passwd FROM mentorku.userlist WHERE username=%s", (username,))
        acc = cursor.fetchone()
        if acc:
            usernameDB = ''.join(acc["username"].split())
            passwdDB = ''.join(acc["passwd"].split())
            passwd_salted = passwd + str(acc["passwd"])
            hashed_passwd = hashlib.md5(passwd_salted.encode())
            if ((username == usernameDB) and (hashed_passwd == passwdDB)):
                return "ok", 200
        else:
            return "forbidden", 403

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True, port=8080)