### Conceptual Exercise

Answer the following questions below:

- **What is a JWT?**

*A JWT (AKA JOTS or JSON Web Token) is special node authentication library that enables the creation of a serialized token that gets created when a user signs into an application. It is more API-friendly than Flask's authentication methods. We're able to share authentication info across multiple APIs / hostnames with JWTs.*

- **What is the signature portion of the JWT?  What does it do?**

*In order to understand the signature portion of the JWT, one must understand the header and the payload preceding it:*
1. *Header: metadata about token (signing algorithm used and type of token)*
2. *Payload: data to be stored in token (typically an object)*
*- Often, this will store things like the user ID*
*- This is encoded, not encrypted — don’t put secret info here!*
3. *Signature: version of header and payload, signed with secret key*

- **If a JWT is intercepted, can the attacker see what's inside the payload?**

*Yes. The payload is encoded, not encrypted.*

- **How can you implement authentication with a JWT?  Describe how it works at a high level.**

*Well, in Flask, standard sessions are transmitted via cookies, so they are passed automatically between the server and the browser. The JWT standard isn’t involved itself with when a how tokens are sent — this is up to the application developer. We do this by sending these in the request manually, and retrieving them manually from the request in the server.*

*First, you need to install* 
```
$ npm install jsonwebtoken
``` 
*Then, you need to create  a token with 2 things:* 
1. *payload: object to store as payload of token*
2. *secret-key: secret string used to “sign” token*
3. *jwt-options is optional object of settings for making the token*

*Next, you can use the above data like so: jwt.sign(payload, secret-key, jwt-options)*
```
const jwt = require("jsonwebtoken");

const SECRET_KEY = "oh-so-secret";
const JWT_OPTIONS = { expiresIn: 60 * 60 };  // 1 hour

let payload = {username: "jane"};
let token = jwt.sign(payload, SECRET_KEY, JWT_OPTIONS);
```
*This jwt.sign function can be implemented in an Express route after verfying or creating a password with bcrypt*

*Finally, you can verify the token from a req.body, or more commonly through a separate middleware function that can be called **authenticateJWT**. Inside, jwt.verify(tokenFromBody, SECRET_KEY);*

- **Compare and contrast unit, integration and end-to-end tests.**

*Between unit and end-to-end tests lie integration tests. They have one major advantage over unit tests: they ensure that modules which work well in isolation, also play well together. Integration tests typically focus on a small number of modules and test their interactions.*

- **What is a mock? What are some things you would mock?**

*Mocking is primarily used in unit testing.*
*An object under test may have dependencies on other (complex) objects.*
*To isolate the behavior, you replace other objects by mocks that simulate their behavior.*
*This is useful if the real objects are impractical to incorporate into the unit test.*
*You can mock:* 
* *AJAX requests*
* *Reading/Writing to files*
* *Impure functions like Math.random*

- **What is continuous integration?**

*It is the practice of pushing updates after every small change made so an application incremently gets better as opposed to making a large amount of changes and pushing that code all at once.*

- **What is an environment variable and what are they used for?**

*An environment variable is a value that is stored in the literal local environment of your project so it can run certain processes smoothly without sercurity breaches or just so your project runs on its own. Things like secret API keys are environment variables, or any secret key.* 

- **What is TDD? What are some benefits and drawbacks?**

*TDD stands for Test Driven Development. It's the act of writing tests for your projects before writing any of the actual code so bugs can be found much more prematurely and to lead to better architectural decisions. This method of writing code can be considerably faster than writing code first and then writing tests. The downside is that the tests will obviously fail at first and that not every company works like this, although most of them do.*

- **What is the value of using JSONSchema for validation?**

*JSONschema is great because it validates incoming JSON data as it is request through an Express route in easily customizable ways. It reduces the risk of adding faulty information to databases. It's very easy to generate them through [jsonschema.net]*

- **What are some ways to decide which code to test?**

*Coverage percentages shouldn't be the main focus, but consistently testing is important. Generally you should be testing APIs not databases.*

- **What does `RETURNING` do in SQL? When would you use it?**

*The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. Without RETURNING you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns. So RETURNING helps avoid another roundtrip to the database.*

- **What are some differences between Web Sockets and HTTP?**

*WebSocket is an event-driven protocol, which means you can actually use it for truly realtime communication. Unlike HTTP, where you have to constantly request updates, with websockets, updates are sent immediately when they are available.*

- **Did you prefer using Flask over Express? Why or why not (there is no right**
  **answer here --- we want to see how you think about technology)?**

*I liked Flask because of how straightforward and easy to learn it is. But in terms of flexibility I have a feeling that Express is probably even more important to learn since it ties in with a lot of the most popular JavaScript libraries like React or Angular. It may take some getting used to but I don't think the learning curve will be that insane, especially since Flask and Express are similar in a lot of ways. Jest testing is a little more easy to understand than Python's testcase.*
