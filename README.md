<h1>Base React-Django App</h1>
This is a blank django-backend/react-frontend web application that uses webpack to manage static files. Django-rest-framework is setup so that you can make API requests for data from the frontend. Also, css is being loaded through the javascript require syntax through webpack.

<h2>Install dependencies</h2>

<code>sudo pip install -r requirements.txt</code>

<code>npm install</code>

<h2>Configure Local Webpack Path (for mac/pc compatability)</h2>

Create a file in the top-level called 'mac-pc-compatability.js'.

If you are using a mac, paste the following code into the file: <code>module.exports = "."</code>

If you are using a pc, paste the following code into the file: <code>module.exports = "../.."</code>

<h2>Launch Server</h2>

To launch server you need to launch the webpack server + django server:

Webpack cmd: 
<code>./node_modules/.bin/webpack --config webpack.config.js --watch</code>

Django cmd: 
<code>python manage.py runserver</code>

