### Start application development mode
```
npm run dev
```

### Convert app from ts to js
```
npm run build
```


### Start application production mode
```
npm start
```

### Routes
GET /movies/- Returns a list of movies in the database in JSON format

GET /movies/{{id}}/- Returns a detail view of the specified movie id. Nest director details in JSON format

GET /directors/- Returns a list of directors in the database in JSON format

GET /director/{{id}}/- Returns a detail view of the specified author id

POST /director/- Creates a new director with the specified details - Expects a JSON body

POST /movie/- Creates a new movie with the specified details - Expects a JSON body

PUT /director/{{id}}- Updates an existing director - Expects a JSON body

PUT /movie/{{id}}- Updates an existing movie - Expects a JSON body 