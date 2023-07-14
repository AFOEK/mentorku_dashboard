from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 
@app.route('/')
def login():
    

if __name__ == '__main__':
    app.run(debug=True, port=8080)