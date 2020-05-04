
# Neoworker

# Deployement : 

> A Node/React Js website

`Neoworker Back-Office` is a dynamic website that connects freelance profiles to employers thanks to its powerful algorithm. The administrators can manage their jobs and neoworkers, and neoworkers can manage their skills and get offers.

It was created by 5 students of the Wild Code School of Marseille during 8 weeks : Stevie CUTMAN, Anthony PORTIER, Alexandre GUIDAT, Kevin THOMANN and Dylan BERTHIER.

Everyone is welcome to use it. It is the proud work of a brilliant team and their first-ever project with a real client.

## Installation
- Clone the repo in your terminal by clicking the _green_ clone or download button at the top right and copyin the url
- In your terminal, type ```git clone URL```
  - replace URL with the url you copied
  - hit enter
- This will copy all the files from this repo down to your computer
- Split your terminal into 2 windows, cd into back/ and ```npm install```, do the same into front/ to install all      
  dependencies you need
- In back/, ```sequelize db:seed:all```(or ```npx sequelize db:seed:all```)  to retrieve dataset we have set for you !
- Now, YOU HAVE TO SET in back/config/config.json, in development section, your own username, password and database you use   with MYSQL
- Launch your server in back/ with ```nodemon index.js``` (or ```npx nodemon index.js```)
- Last, but not least, type ```npm start``` in front/ to run the app locally

## Structure
```
Marseille_0919_P3_NeoWorker

├── back 
    ├── config
    │   └── config.json
    ├── migrations
    │   ├── 20191205121448-create-users.js
    │   ├── 20191205123822-create-missions.js
    │   └── 20191205124935-create-freelancer.js
    ├── models
    │   ├── freelancer.js
    │   ├── index.js
    │   ├── mission.js
    │   └── user.js
    ├── node_modules
    ├── routes
    │    ├── freelancer.js
    │    ├── mission.js
    │    └── user.js
    ├── seeders
    │    └── 20200504130148-admin-test.js
    ├── .gitignore
    ├── DataManagement.js
    ├── index.js  
    ├── package-lock.json
    └── package.json
    └── test.html

├── front 
    ├── node_modules
    ├── public
    │   ├── favicon.png
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── components
    │   │    ├── admin
    │   │    ├── freelancer
    │   │    ├── importPicture
    │   │    ├── matching
    │   │    ├── searchbar
    │   │    └── sidebar
    │   ├── img
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   ├── serviceWorker.js
    │   └── setupTests.js
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    └── package.json
```
## Dependencies
- [React.JS](https://reactjs.org/)
- [Node.JS](https://nodejs.org/)
- [Express](https://expressjs.com/fr/)
- [Sequelize](https://sequelize.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Bcryptjs](https://www.npmjs.com/package/bcrypt)
- [Reactstrap](https://www.npmjs.com/package/reactstrap)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Jwt-decode](https://www.npmjs.com/package/jwt-decode)
- [ReactSlick](https://www.npmjs.com/package/react-slick)
- [React-star-rating](https://www.npmjs.com/package/react-star-ratings)
- [Semantic-ui-react](https://www.npmjs.com/package/semantic-ui)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Multer](https://www.npmjs.com/package/multer)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [Node-schedules](https://www.npmjs.com/package/node-schedule)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Dataset

With Sequelize and seeders, we can inject dataset directly without go through Postman or MYSQLWorkbench and create some datas via the good roads

To enter on the section Admin App, you have to connect with an admin account. With seeders, we have set an admin account ready to use :
- Email : admin@gmail.com
- Password : password

For mystical reasons, we have sometimes to clear your cache on your browser to reset your localstorage and then connect to the admin section properly.

## Some precisions

This web app is not finish but there is here to show at some recruiters our works, our skills in React, in fullstack development web after 5 hard months on our formation at the WILD CODE SCHOOL !!!

So enjoy ;)
