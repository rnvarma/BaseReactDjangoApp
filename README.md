This is a blank django-backend/react-frontend web application that uses webpack to manage static files. Django-rest-framework is setup so that you can make API requests for data from the frontend. Also, css is being loaded through the javascript require syntax through webpack.

To install dependencies

<code>sudo pip install -r requirements.txt</code>

To launch server you need to launch the webpack server + django server:

Webpack cmd: 
<code>./node_modules/.bin/webpack --config webpack.config.js --watch</code>

Django cmd: 
<code>python manage.py runserver</code>

