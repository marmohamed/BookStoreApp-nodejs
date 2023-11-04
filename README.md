
# I am not a node developer :)


## Prerequisites

1. Install docker

## Run
1. run `docker compose up`
2. go to `http://localhost:8000/api-docs/`


## Features implemented:
1. Database objects for the books, authors, borrowers, shelves, borrowing process in `src/api/models`
1. List/Create/getOne Book
1. ORM for security
1. User input validation in `src/api/validators`
1. Caching is used
1. Errors from validation, db or cache are handled
1. Ratelimiting for the creation endpoint in `src/api/middlewares/ratelimit.js`
1. Dockering the app

## To do
1. add an index on books' titles for search
