#Isomorphic application "Pizza constructor"

Just make your own pizza!

## Installation (development mode)

1. ```Install nodejs at least v6.3.0.```
2. ```npm install```
3. ```cp etc/dev-client-config.json etc/client-config.json```
4. ```npm run nodemon```
5. ```npm run webpack-devserver``` (in another terminal, and wait until build is ready)
6. open http://localhost:3000

## Production mode

1. ```Install all like in the development mode.```
2. ```cp etc/prod-client-config.json etc/client-config.json```
3. ```npm run build```
4. ```npm run start```
5. open http://localhost:3000

**NOTE**:
    Applications doesn't use mongodb for ease.
    We'd preferred to use webpack instead of gulp, because in our mind one is more flexible.
    But we can use gulp it's important;
    We wanted to realize more functionality on a constructor pizza page in the future.
    Now it's only working current(single) pizza =).
