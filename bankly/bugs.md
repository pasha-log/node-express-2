- BUG #1: "GET /users" didn't return only *basic* info: 
    ```
    {users: [{username, first_name, last_name}, ...]} 
    ```
- BUG #2: "BCRYPT_WORK_FACTOR" was 10, so I changed it to 12 to increase security. 

- BUG #3: "npm run seed" wasn't working properly. Couldn't dropdb for dbs that don't exist yet. So I seeded both databases: bankly and bankly_test inside of data.sql itself.

And I changed the "seed" property in **package.json** from 
"seed": "dropdb bankly && createdb bankly && psql bankly < data.sql && dropdb bankly_test && createdb bankly_test && psql bankly_test < data.sql"
to 
"seed": "createdb bankly && psql bankly < data.sql && createdb bankly_test && psql bankly_test < data.sql"

- BUG #4: Line number 9 has an import ```const { json } = require('express');``` that is useless. I commented it out.

- BUG #5: "POST /register" route doesn't actually allow user to sign in as admin or not. That was only possible if you made a direct INSERTION statement in postgresql. 
Now the static method User.register and the route can accept an admin boolean. The users table admin column has a NOT NULL constraint now, and the test for "GET /register" includes the boolean.  

- BUG #6: middleware function authUser doesn't actually verify any existing tokens passed. 