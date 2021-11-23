---
author: Afiq Nazrie Rabbani
title: mangkoran/node-api-tut
---

# Instruction

1.  Clone/fork this repo
2.  Navigate to repo directory
3.  To install required dependencies, run `npm install`
4.  Create `.env` file to store env variables.  You can copy `envexample`
    which has the required env variables to assign.  To copy, run
    `cp envexample .env`
5.  Setup MongoDB
    -   Using [MongoDB](https://www.mongodb.com/) (Assuming you already
        setup MongoDB. [Documentation](https://docs.atlas.mongodb.com/))
        1.  Make sure `MONGODB_URL` is set to MongoDB.
            [Documentation](https://docs.atlas.mongodb.com/driver-connection/#driver-examples)
    -   Using [MangoDB](https://github.com/MangoDB-io/MangoDB) (Assuming
        you already setup `docker` and `docker-compose`)
        1.  Make sure `MONGODB_URL` is set to localhost
        2.  `docker-compose up -d`
        3.  To access MangoDB's `mongosh`, run
            `docker run --rm -it --network=<compose-network> --entrypoint=mongosh mongo:5 mongodb://mangodb/`.
            Change `<compose-network>` with Step 1 `docker-compose`
            network.  Usually it is `<dir>_default`
6.  Run application using `npm start`

# Note

-   MangoDB is still in alpha state.  Use it for development only.
    MangoDB is best used for fully offline development
