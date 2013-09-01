
./app.js - entry point
./package.json - npm package description
./posts.js - Posts Data Access Helper
./sessions.js - Sessions Data Access Helper
./users.js - Users Data Access Helper
./views/ - html templates

Getting started
1.install mongodb and import the data file
C:\mongodb\bin>mongoimport --db school --collection school_list --file schools_numeracy_list.json --jsonArray
2.Start the mongod server
C:\mongodb\bin>mongod
 then go to Assignment/
npm install
node app.js
