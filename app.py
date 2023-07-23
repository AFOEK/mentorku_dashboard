from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

import os
import hashlib

load_dotenv()

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = ''.join(os.environ.get("SQL_URI_TUNNEL"))
app.config['SQLALCHEMY_DATABASE_URI'] = ''.join(os.environ.get("SQL_URI_LOCAL"))
# app.config['SQLALCHEMY_DATABASE_URI'] = ''.join(os.environ.get("SQL_URI_PROD"))

@app.route('/login', methods=["POST","GET"])
def login():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        return "OK"

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True, port=8080)