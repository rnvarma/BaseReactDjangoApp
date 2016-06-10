<h1>Base React-Django App</h1>
This is a blank django-backend/react-frontend web application that uses webpack to manage static files. Django-rest-framework is setup so that you can make API requests for data from the frontend. Also, css is being loaded through the javascript require syntax through webpack.

<h2>Setup environment</h2>

First, setup a python virtualenv (<code>pip install virtualenv</code>) with the following command:

<code> virtualenv <name_of_project></code>

Then go into the environment and activate it with the following command (for macs, pcs are something else):

<code>source bin/activate</code>

Now clone the repository into your virtualenv:

<code> git clone https://github.com/rnvarma/BaseReactDjangoApp</code>

Now change into the repository folder for the next steps.

<h2>Install dependencies</h2>

Run the following commands while your virtualenv is activated and you are in the top level directory of the repository:

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

