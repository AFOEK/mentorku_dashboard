from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

import os
import hashlib

load_dotenv()

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = ''.join(os.environ.get("SQL_URI_TUNNEL"))
# app.config['SQLALCHEMY_DATABASE_URI'] = ''.join(os.environ.get("SQL_URI_LOCAL"))

@app.route('/')
def login():
    return "ok"

if __name__ == '__main__':
    app.run(debug=True, port=8080)