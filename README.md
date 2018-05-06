Module 2 Assignment Lab: RESTful Blog API

run npm start

//gets post data
curl "http://localhost:3000/posts"

//posts post data
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts"

curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts"

//updates post data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"

//deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/1"

//get comments
curl "http://localhost:3000/posts/0/comments"

//comments post data
curl -H "Content-Type: application/json" -X POST -d '{"text": "a"}'  "http://localhost:3000/posts/0/comments"

curl -H "Content-Type: application/json" -X POST -d '{"text": "b"}'  "http://localhost:3000/posts/0/comments"

//updates comment data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{ "text": "new"}' "http://localhost:3000/posts/0/comment/0"

//deletes comment data at specific id
curl -X DELETE "http://localhost:3000/posts/0/comment/0" 
