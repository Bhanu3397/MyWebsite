from flask import Flask
from flask import render_template
app=Flask(__name__)

#here we are rendering an index.html
'''@app.route('/')
def index():
    return render_template("index.html")'''

@app.route('/')

#Here we are using directly interacting within the app.py
'''@app.route('/')
def index():
    return "Hello, World"
@app.route('/<string:name>')
def hello(name):
    name= name.capitalize()
    return f"<h1>Hello,{name}</h1>" # Return with h1 in html format
    #return ("Hello, {}".format(name).capitalize())'''