# Eat-Da-Burger

## Overview

This is a burger logger utilizing MySQL, Node, Express, Handlebars and a homemade ORM. Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app displays the burger on the left side of the page -- waiting to be devoured.  Each burger in the waiting area also has a Eat Me! button. When the user clicks it, the burger will move to the right side of the page. The app will store every burger in a database, whether devoured or not.

## App Setup

NPM packages: Express, Handlebars, method-override, body-parser, and MySQL.

## DB Setup

In a burger directory, there is a folder named db. The db folder contains the schema.sql file. 

SQL queries in this file do the following:

Create the burgers_db.
Switch to or use the burgers_db.
Create a burgers table with these fields:
* id: an auto incrementing int that serves as the primary key.
* burger_name: a string.
* devoured: a boolean.
* date: a TIMESTAMP.

In the db folder, there ia also a seeds.sql file. In this file, insert queries populate the burgers table with three entries.  The files schema.sql and seeds.sql can be ran from the command line to create and populate the mysql server.

## Config Setup

Inside your burger directory, there is a folder named config.
The connection.js file is inside the config directory.

Inside the connection.js file, there is the code to connect Node to MySQL. The connection is exported.

Inside the config directory is an orm.js file.  The file imports (requires) connection.js.

In the orm.js file, methods will execute the necessary MySQL commands in the controllers. These methods are needed in order to retrieve and store data in your database.

* all
* create
* update 

The ORM object is exported in module.exports.

## Model setup

Inside the burger directory is a folder named models.

The models folder contains a burger.js file.
Inside burger.js, it imports orm.js.

It also contains the code that will call the ORM functions using burger specific input for the ORM.

An export is at the end of the burger.js file.

## Controller setup

Inside the burger directory is a folder named controllers.
In controllers is the burgers_controller.js file.
The burgers_controller.js file imports the following:

Express
burger.js

The router for the app is created and is exported at the end of your file.

## View setup

Inside the burger directory is a folder named views.

This contains the following:
* the index.handlebars file which has the template that Handlebars can render onto
	* contains a button the user can submit input into the database
* the layouts directory
	* the main.handlebars file which has been set up to be used by Handlebars

## Directory structure

All the recommended files and directories from the steps above should look like the following structure:

*
 	* config
   	* connection.js
		* orm.js
	* controllers
		* burgers_controller.js
	* db
		* schema.sql
 		* seeds.sql
	* models
		* burger.js
	* node_modules 
	* package.json
	* public
		* assets
 			* css
 				* burger_style.css
 			* img
 				* burger.png
			* js
				* burgers.js
	* server.js
	* views
		* index.handlebars
		* layouts
			* main.handlebars