# RESTful apis

This repo is a track to RESTful API
Credit goes to [REST-API-Course-V2](https://github.com/acloudfan/REST-API-Course-V2.git)

**1. Rest Design Pattern Security**<br>
1.1 Evolution of RESTful services<br>
1.2 REST API Architectural Constraints<br>
1.3 Designing REST APIs<br>
1.4 REST API Error Handling Patterns<br>
1.5 REST API Handling Change - Versioning<br>
1.6 REST API Cache Control Patterns<br>
1.7 REST API Response Data Handling<br>
1.8 REST API Security<br>
1.9 REST API Specification using Swagger<br>
1.10 API Management
1.11 API traffic management

**2. RESTful API  With Express Framework Crash Course**<br>
2.1 APIs and server<br>
2.2 CRUD operations

**3. Node.js MVC, REST APIs, GraphQL, Deno**<br>
3.1 Basics<br>
3.2 Workflow and debugging<br>
3.3 Working with Express.js<br>
3.4 Dynamic content & adding template engines<br>
3.5 The Model View Controller (MVC)<br>
3.6 Enhancing the App<br>
3.7 Dynamic Routes & Advanced Models<br>
3.8 SQL Introduction<br>
3.9 Understanding Sequelize<br>
3.10 Working with NoSQL & Using MongoDB<br>
3.11 Working with Mongoose<br>
3.12 Session & Cookies<br>
3.13 Adding Authentication<br>
3.14 Sending Emails<br>
3.15 Advanced Authentication<br>
3.16 Understanding Validation<br>
3.17 Error Handling<br>
3.18 File Upload & Download<br>
3.19 Adding Pagination<br>
3.20 Async Requests<br>
3.21 Adding Payment<br>
3.22 Working with REST APIs - Basics<br>
3.24 Working with REST APIs - Practical Application<br>
3.25 Understanding Websockets & Socket.io<br>
3.26 Working with GraphQL<br>
3.27 Deploying<br>
3.28 Testing Node.js Applications<br>
3.29 Node.js as a Build Tool and Using npm<br>
3.30 Modern JavaScript & Node.js<br>
3.31 Node.js & TypeScript<br>
3.32 Introduction to Deno<br>
3.33 Deno, CRUD & Databases (MongoDB)

## 1.Rest Design Pattern Security

**Tools for this section**
- MongoDB
- Swagger editor
- IBM API Connect
- Mulesoft
- apigee

## 1.1. Evolution of RESTful services

### APIs
- API developer portals examples
- [Citi](https://sandbox.developerhub.citi.com/us/home)
- [Rapid API](https://rapidapi.com/)
- [Expedia](https://developers.expediagroup.com/docs)

### REST/JSON API
Remote Procedure Calls (RPC) are a mechanism that allows a computer program to execute code on another computer or server in a network. It enables a program to invoke functions or procedures located on a remote machine as if they were local functions, abstracting away the details of the network communication.

There are various implementations of RPC, such as XML-RPC, CORBA, and gRPC, among others. However, REST (Representational State Transfer) and JSON (JavaScript Object Notation) have gained immense popularity due to their simplicity, ease of use, and compatibility with web technologies. Here's why REST/JSON is so popular:

1. Simplicity: RESTful APIs use standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. JSON provides a straightforward and human-readable data format, making it easier to work with compared to other complex data exchange formats.

2. Lightweight: JSON is a lightweight data interchange format that can be quickly parsed and generated, making it efficient for data transmission over the network.

3. Language Agnostic: JSON can be easily parsed and generated in multiple programming languages, making it a flexible choice for various platforms.

4. Web-Friendly: RESTful APIs are built on top of the HTTP protocol, which is the backbone of the World Wide Web. This alignment allows REST/JSON APIs to be accessible from any device with internet access.

5. Scalability: The stateless nature of RESTful APIs allows them to be scalable and handle a large number of concurrent requests.

6. Support for Multiple Data Types: JSON supports a wide range of data types, making it suitable for representing structured data, arrays, and nested objects.

7. Versatility: RESTful APIs can be used for a variety of applications, from simple data retrieval to more complex interactions.

8. Popularity and Community Support: Due to the widespread adoption of REST/JSON, there is a large community of developers, libraries, and tools available, making it easier to find resources and support.

Overall, the combination of RESTful architecture and JSON data format provides a user-friendly and robust approach to building APIs, making it a popular choice for modern web and mobile applications.

### GET, POST, PUT, and DELETE methods. 
Here's an explanation of each method in one sentence:

- GET: The GET method is used to retrieve data from a specified resource, and it should not have any side effects on the server (i.e., it should be safe and idempotent).

- POST: The POST method is used to send data to the server to create or add a new resource, and it may have side effects on the server (i.e., it's not safe but idempotent).

- PUT: The PUT method is used to update or replace an existing resource on the server with the data provided in the request.

- PATCH: The PATCH method is used to apply partial modifications to a resource on the server, allowing updates to specific fields or properties without replacing the entire resource.

- DELETE: The DELETE method is used to request the removal of a specified resource from the server.

### Why REST
- Common set of principles
- Best practices 
- Compatible with any data format (XML, JSON, CSV)
- Simplicity, flexibility
- JSON is efficient and human consumable

### RESTful API
- REST = Representational State Transfer
- Objects have a representational state
- Can be formatted to jpg, pdf, xml, csv, json, xml, ...
- The RESTful API is not tied to a data format
- Representational states can be send in different formats by the RESTful API
- RESTful API manages the resources
- REST APIs follow the REST architetural style
- REST Client may request the resources via GET 
- RESTful API gets the resources and sends them in the requested format
- REST is not binded to HTTP
- Http REST APIs use the HTTP communication protocol

### Private, Public, and Partner API
- 3 types of API consumer are private (internal), public (external), partner (trusted by the api provider)
- Private APIs are used by developer teams
- Public APIs are ment to be consumed by public developers
- Trusted APIs are used by trusted partners,
- The implementation may be similiar
- A business decision: features available for which group
- Management aspects: API security, access request, documentation, SLA management
- API security: Trusted developers - BasicAuth, proprietary schemes
- API security: Externals - Key/Secret, OAuth
- Documentation: Internal, trusted - documentation in internal websites, pdf in a controlled environment
- Documentation: External - documentation in developer portals in an uncontrolled environment
- Access Request: Internal, trusted - emails, Internal ticketing/process in a controlled environment
- Access Request: External - developer portal in an uncontrolled environment (expose provisioning workflow)
- SLA Management: Example - uptime 99.99%, max 20 calls/second, support email only - define SLA Tiers, needs runtime management monitor the KPIs to provide the quality of service they commited by the SLA Tiers

### API Value Chain
- API value chains facilitate interconnected activities through APIs, enabling seamless communication between software systems and services. They empower businesses to leverage external capabilities, leading to an innovative and collaborative API ecosystem that fosters growth and efficiency. However, challenges like security and data privacy require careful management to ensure smooth interactions. Overall, API value chains play a crucial role in modern software development and integration, driving business success and enhanced user experiences.
- The API value chain starts with the creation and exposure of APIs by service providers, such as cloud platforms, data providers, or software vendors. These APIs act as the building blocks, encapsulating specific functionalities and data access points.
- Developers from various organizations then consume these APIs to integrate external services into their own applications or systems. This integration allows them to enhance their offerings, extend functionalities, or access valuable data from external sources, creating new possibilities and delivering enhanced user experiences.
- As the API ecosystem expands, a network effect emerges, where more APIs attract more developers, leading to the creation of a vast and diverse API economy. This thriving ecosystem fosters innovation, enabling businesses to rapidly deploy new solutions and services while leveraging the collective expertise of multiple providers.
- Furthermore, API value chains promote collaboration and partnerships between organizations. By exposing APIs, companies can open up their services to potential partners, allowing them to integrate and build upon each other's offerings, leading to mutually beneficial relationships and business growth.


## 1.2 REST API Architectural Contraints

### Architectural contraints overview
- HTTP and json doesn't make an application RESTful, but maybe RESTlike or RESTish
- RESTful: 6 design rules - 6 architectural contraints by Roy Fielding in his dissertation from 2000
- Client - Server: Usage of client server design principles for implementing the REST APIs
- Uniform interfaces: Defined contracts between client and server
- Statelessness: Server should not manage the state of the application
- Caching: The server should use http caching headers to cache the responses to the request received from the client
- Layered: Each layer should be manageable independently
- Code on demand (optional): The server may send code that is executed by the client
- RMM Richardson Maturity Model (RMM): measures the restfulness/REST compliance to a REST implementation
- RMM goes from level 0 (low compliance) to level 3 (high compliance)

### REST API architectural constraints - client server
- Client requests the resource
- Server serves the resource on request, can be multiple clients
- Client and server don't run in the same process space
- The client makes requests through a network, they maintain the uniform interface, the contract
- This is called 'seperation of concerns'
- Server conerns: security, persistence, scaling, ...
- Client concerns: authentication & authorization, multi form factor, application, ...
- Decoupled architecture allows independent evolution

### REST API architectural constraints - uniform interface
- #1 Individual Resources: Resources are identified in the request (URI/URL), eg with parameters
- #2 Representation of the Resources: Format on the server side is maybe not what the client needs, the server transforms the data
- #3 Self descriptive messages - metadata: Client may set the accept header to application/json to inform that it accepts json formatted data
- The API server may send metadata such as content-type of the payload, http status code, host information
- #Hypermedia: The server can also send back hypermedia e.g. response data + actions (links for discovery)
- All REST API resources are identified by a Uniform Resource Identifier e.g. /Cars/{vin}

### REST API architectural constraints - statelessness
- Client must manage it's own state thus making the server stateless
- Not RESTful: The server may manage the client states in a session store on the server side
- REST: Each client is responsible for managing its own state - simplifies, scalability, reduces resources
- Server receives state info from the client
- Server treats each request as independent
- Requests are self-contained

### REST API architectural constraints - caching
- The client manages it's own state, this may lead to increased communication, increase of request data size, the performance may degrade 
- The caching constraints suggests the use of caching to achieve scalability and performance
- Cache location can be infront of the database (database caching), or in the server (server caching)
- An application using the REST client can also cache the responses locally to avoid making calls, but use the local cache
- Proxy and Gateways between the client and server may provide caching 
- "Server should specify Cache-Control Directives in responses to control Caching behavior"
- The server may mark responses as non-cachable
- Cache-Control is a HTTP header for defining the cache policies
- Eg "cache-control: public, max-age-31536000"
- Cache control No-Store (no caching of response), private (only cache on user device), public (cache in any cache), max-age (time in seconds for expiry)
- Expires header: Date/time for expiry
- Last-Modified header: Date/time of last change
- Etag header: Unique identifier associated with a response
- Summary: Server controls caching behavior on client via cache directives, for HTTP specified via http-headers

### REST API architectural constraints - layered system 
- (Rest Client) Web tier, App tier, Database tier in
- Web tier has a dependency on the App tier but is not aware of the App tier
- Dependencies are unidirectional
- Gateway is like a Webtier
- Load balancer lays between Gateway and App tier
- Layering simplifies the architecture - reduced dependencies
- The architecture may evolve with the changing needs
- Layer changes at most impacts ONE layer
- One should build the API using the layered architectural approach

### REST API architectural constraints - code on demand (optional constraint)
- "Server can extend the functionality of client by sending Code"
- E.g. the web app may send javascript, flash, or java applets, that get's executed in the browser 
- For REST server, the server sends back the response instead of html, the server sends also code
- HATEOAS: Hypertext As The Engine Of Application State
- The idea behind HATEOAS is similiar to code on demand, client gets response that may contain hyperlinks
- Actions that can be taken by the REST client are controlled by the REST server (eg sending specific links)
- Server may add new functionalities
- HATEOAS may come as json with links, method, and description e.g. a (generated) link to pay, refund, or cancel to manipulate the resources on the rest server

### Richardson Maturity Model for REST API
- A measure for restfulness
- Level 3: Hypermedia control
- Level 2: Resources + URI + HTTP Verbs, CRUD = HTTP Verbs
- Level 1: Resources + URI
- Levl 0: RPC
- Swamp of POX: Plain Old XML means API uses the SOAP standard and uses XML as the data format
- Resources: Representation of real-world object
- Manipulation must be carried out with the right HTTP verb (GET, POST, DELETE, PUT, PATCH)
- Level 3 HATEOAS: The REST client receives the object representation and the hypermedia links to manipulate the resources

### WebApp versus REST API Architecture
- WebApp and REST use the client server architecture, the layered approach, caching, code on demand and HATEOUS
- Uniform interface: The webapp has no hard & fast rules on how to design the url of the resource
- RESTful has strict rules on how the url should be defined
- The webapp can manage the state locally in a persistant storage
- In RESTful, the server doesn't manage the state
- Webapps usually use GET and POST
- RESTful use CRUD: create (POST), read (GET), update (PUT), delete (DELETE)

## 1.3 Designing REST API

### API Endpoint URL
- Provides offer base urls subdomains such as https://api.paypal.com, https://app.ticketmaster.com, https://developer.uber.com, ...
- logical grouping of resources can be https://domain/product/version/resource/{id} to manage teams, users can understand the API easier

### Practices for Resource Names, Actions & Associations
- Resource naming e.g. /businesses (yelp), /businesses/{id}, /people/{id} {linkedin}
- Most apis use plurals for resource naming, follow a practice
- Operations on a resource: CRUD, envoke the endpoints
- Actions may not apply to a specific resource: /estimates/price, /friendships/lookup, api.spotify/v1/search
- properties/{id}/roomTypes/{id}/amenities
- Suggestion: restrict the nesting to three sources or use subqueries

### Setup the API URI for ACME API
- https://api.acme.com/v1/vacations
- GET /vacations/destinations/{Bahamas}
- Query parameters: GET /vacations/destinations?destination=Bahamas&?numberofdays=5

### HTTP API Request flow and HTTP Status Code
- Request with http header and body
- Response with http header and body
- Defined independently for each CRUD method in the Uniform Interface Contract (POST, GET, PUT DELETE)
- Uniform contract: Endpoint, query paramters, request, response
- Request: standard headers, custom headers, data format, request schema
- Response: Https status, data format, response schema
- Servers always sends a status code back in the header, a three digit number
- Status code can take one of 5 classes
- 1xx informations eg 100 continue
- 2xx success e.g. 200 ok
- 3xx not found e.g. 307 temporary redirect
- 4xx client error e.g. 404 not found
- 5xx server error e.g. 500 internal server error
- Protocol about status codes are in RFC2616, use standard codes, don't invent own codes

### Implementing REST API CRUD operations
- POST Endpoint, resource representation, standard/custom headers, response code is eg 201 (created)/400 (missing field)/503 (database unreachable), response body return the new instance or a link to the resource instance
- GET Endpoint, return one instance if the id is specified, query parameters, standard/custom headers, request body is optional, response to GET status code is eg 200 ok/404 resource not found/500 internal server error
- PUT/PATCH update all of the resources of the resource, endpoint, parameters, body with update data, standard or custom header, PUT response status code is eg 200 success/201 created/204 no content/404/500/...
- PATCH updates some of the attributes of the resource
- DELETE endpoint, parameters, standard/custom headers, response to DELETE status code is 200 success (deleted)/204 success (no content in the body)/404/500/...
- Can we use POST for updating: Twitter uses just GET and POST, these are guidelines 
- 415: Format not supported

### API Data Format Setup
- Deliver most value for clients
- JSON, XML, CSV, build for flexibility
- One method to support multi data format: /news?output=json, /news?output=csv
- One method to support multi data format: /application/json, application/csv (PayPal uses this)
- One method to support multi data format: forecast/daily/{days}day.json, forecast/daily/{days}day.csv (the weather channel uses this)
- Multiple data formats can be supported with query parameters, resource format suffix, or http headers

### Setup the Demo/Test environment
- Create a free MongoDB account and create ./part-1/db/clouddb.js file and use your credentials to write the following five lines in the file
- const DB_USER = "xxxx"
- const DB_PASSWORD = "xxxx"
- const DB_NAME = "xxxx"
- const CLUSTER_HOST = "xxx"
- exports.DB_URI=`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`

### Recap
- GET leads to retrieve a document
- POST leads to create a document
- The route is defined in api/v1/ and created as so: var URI = '/' + VERSION + '/' + RESOURCE_NAME; 
- Recommended: to check the app to understand more, play with POSTMAN

## 1.4 REST API Error Handling Patterns

### REST API Error Handling Patterns
- Application Errors: Status codes are defined in RFC2616, send a status code and reason-phrase, use the body or body for that
- Standardize the status codes accross the APIs
- Option 1: Error information only in the HTTP header, maybe use custom headers to send the error information (Etsy)
- Option 2: All error information is contained in the body: Error information in standard format (Old versions of Facebook, depreciated)
- Option 3: Error information in the header and in the body, if the status code is error 400 or 500, interpret the body as error message (Uber and most APIs use this approach)
- How many codes should the API developer use: 10 codes should be enough eg 200 ok, 201 created, 400 bad request, 401 unauthorized, 403 forbidden, 404 not found, 415 unsupported media, 500 server error (Expedia support 14 status codes, TomTom traffic API supports 6 status codes)
- Setup error format, developers may want to log the error codes to create reports, this is a common practice
- The error response should be informative and actionable (what actions should be taken to fix the issue), the error response should be simple, and consistent
- Provide links to the API documentation, provide hints about the error, send messages that may be presented directly to the end user
- Define and use numeric application status codes, e.g. "error code = 7002, required field vacation description is missing", this error message status codes are reusable and the developers don't need to invent new ones
- Error message can be an array of strings e.g. { ... , error: { code: 7000, text: "Message", hints: ["potential issues"], info:"link to more information"}}
- Check examples e.g. of PayPal, Uber, ...
- Response Envelope that can be empty if there are no errors e.g. { ... , error: {}}

### Implementation of Error Handling for a POST API
- A folder util holds the potential errors and compares them to the error from the database.
- A function augments the response before the response gets send, we send an augmented error response (convert to specific errors)
- Check out the branch and study the code, see part-0 README.md

## 1.5 REST API Handling Change - Versioning

### Handling changes to the API
- Non breaking changes: Don't brake existing applications, an api may send more data
- Breaking changes: E.g. change /data.deals to /data.discounts for the same resource would brake existing applications
- API changes can e.g. be to add a parameters for limits (non braking)
- API changes can e.g. be to change the HTTP verb from PUT to POST (braking changes)
- Delete an operation, delete a route (braking changes)
- Minor change: Doesn't require the app developer to change their application 
- Major change: Does require the app develope to change their application e.g. additional parameters are required
- Avoid changes and support backwards compatability (if possible), don't make frequent changes, version your API, focus on app developers

### Versioning the API
- Managing API Versioning
- Versioning patterns for version specification
- HTTP Header: API consumer can provide the version in a custom header x-myapi-version: 1.2
- Query paramters: /post?version=1.2
- URL path parameter: /v2/products
- Use date 2020-02-02, number e.g. 2.8, or name e.g. v2
- Support multiple versions in parallel

### Versioning strategy
- Introduce a new version and depreate another one, then retire the other one that is depreciated
- Introduce a new version and depreate another one, then retire the other one that is depreciated ...
- Always support at least one previous version to give developers time to access the new version e.g. 3 month
- New developers can only access the new version
- Present the news features, developers must understand the benefits of the new version
- Create a roadmap for application developers

## 1.6 REST API Cache Control Patterns

### API Caching concepts and design decisions (1/2)
- Who caches: Caching can be build on all touchpoints: Client, ISP, Gateway, Midtier server, DB Caching
- Benefit of using cache: It improves performance, higher scalability/throughput
- Scenario: 30 calls/second expected, 60 calls/seconds take place, data base allows 50 calls/second - caching may send answers from the Midtier without giving access to the database
- The closer the caching is done to the API consumer, the better is the performance, and the higher is the scalability
- Factors to keep in mind: Speed of change, time sensitivity, security
- What to cache: html, jpeg, pdf, js, css can be cached for days/weeks
- Stocks can't be cached in this sense, they are time sensitive
- Newspaper are in the public domain, they are not time sensitive once they are out
- Customer data: high security but doesn't change always, can be cached but not for long (security)
- Vacation packages in our example: Will expire at some point, low security, data is in the public domain
- Summary: Benefits are enhanced performance and higher scalability; considerations are speed of change, time sensitivity, security.
- Design the caching implementation with this aspects in mind and decide with the following questions in mind.
- What to cache? Consider the aspects above.
- For how long can data be cached? Consider the aspects above.
- Who can cache? The API is in control and can decide who can cache.
- Which component should control the caching? Your API.

### API Caching concepts and design decisions (2/2)
- Cache-Control Directives: MUST b e obeyed by all caching mechanisms along the request/response chain
- Request HTTP-Header Cache-Control Directives may ovveride the API directive
- Cache-control: "directive1, directive2, ..."
- Cache-Control: "private, max-age-60, ..."
- Sensitive data should not be cached on intermediaries, private data is meant for a single user e.g. banking data
- Set the Cache-Control to private: Cache-Control: "private", data gets stored only in the browser; its public by default
- Sensitive data should not be stored anywhere: certain banking data, medical reports ... set Cache-Control: "no-store" to prevent any kind of caching on any kind of touchpoint
- ETag header can be used to check if the data has changed, Cache-Control: "...", ETag: "received-value", data is send if it changed 
- Cache-Control: "max-age=60" cached data is valid for 60 seconds
- Use: private/public/no-store/no-cache/ETag/max-age ... check RFC2616 for further directives 

### API Caching using Cache-Control Directive
- The folder part-2 is a minimal server that implements caching on a /cachetest route

## REST API Response Data Handling Patterns

### Building support for Partial Responses
- Granularity, API implementation
- Typically the REST API provides one API for different clients e.g. notebook browser, mobile phone, ...
- Different clients may not need all data e.g. due to smaller screen size, battery performance, cpu, memory
- The client is in control of the response data, by telling the server what it needs
- The server responses only with the needed sources
- The client is in control of the granularity of the data
- GraphQL is one solution for partial responses (Facebook)
- Solution with Singe Query Paramters: /people/me?fields={Expression} defines the requested data (LinkedIn)
- Multiple Query Parameter: Multipe query paramters to define filters, only, omit (Meetup)

### Partial Responses in the ACME API
- Checkout: git checkout partialresponse in the folder part-1
- Run the example, insert ten values in the db: $node ./tests/TestHotelsDbOps.js insert
- In MongoDB, projections are a feature that allows you to control which fields of a document should be returned in the result set when querying the database
- db.collection.find({}, { name: 1, age: 1 }); // Include only the "name" and "age" fields in the result
- db.collection.find({}, { address: 0, email: 0 }); // Exclude the "address" and "email" fields from the result
- Similiarly, pagination can be realised with mongoDB (database) functionality and query parameters

## 1.8 REST API Security

### REST API Security - Introduction
- Transaction authorized?
- Who is the caller of the API?
- Think about: Data theft, data manipulation, identity theft, DOS attack, ...
- Data security: protect data from unauthorized theft and preserve the integrity of the data
- The data in motion is in the scope of the REST API developer
- Use TLS/HTTPS for REST API, do not allow self signed certificates

### API Basic Authentication
- API Consumer sends the credentials to the API server in the HTTP header
- Authorization: Encoded-Cres, Base64 encoded, User: Password
- Data in clear text are visible to "anyone", don's use basic auth with HTTP
- Basic authentication weakness: The consumer sends the credentials in every request (or with sessions but that's against REST), credentials must not be stored on other devices e.g. mobile app
- Passport.js is an authentication for library for node, e.g. social authentication, ...
- Passport is non intrusive, supports multiple forms of authentication, offers built in support for social authentication
- Decide where to store user data in a file, in LDAP, in a database
- Read the example part-3 to study the basic auth example, add the authorization header in Postman, hit GET localhost:3000/private
- Basic auth code example
- The `base64EncodedCredentials` is a base64-encoded string of the format "username:password". Before encoding, the username and password are concatenated with a colon ":" separator.

```javascript
const axios = require('axios');
const username = 'your_username';
const password = 'your_password';

const credentials = `${username}:${password}`;
const base64EncodedCredentials = Buffer.from(credentials).toString('base64');

axios.get('https://api.example.com/data', {
  headers: {
    Authorization: `Basic ${base64EncodedCredentials}`,
  },
})
  .then((response) => {
    // Handle the response
    console.log(response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });
```
- Keep in mind that Basic Authentication is considered relatively insecure when used alone, as the credentials are sent as plain text (though encoded in base64). It is recommended to use it over secure connections (HTTPS) and to combine it with other security mechanisms like SSL/TLS and token-based authentication for better security.
- HTTP status code 401 is sent back from basic auth in case of failure

### Securing API with Tokens and JWT
- JWT has three parts: Header.Payload.Signature
- Payload Registered/Public/Private Claims
- Header: {type: "JWT", alg: "HMAD"}, base64 encoded
- Payload: Registered claims holds iss (issuer), exp (expiry timestamp), nbf (Not before timestamp)
- Payload: Public claims to identify the API consumer e.g. name, email, phone_number
- Payload: Private claim: agreed upon by consumer and provider, should not collide with predefined claims
- The secret is used when concatenating the base64 header with the payload and hashing with the secret
- The secret must be kept private
- Packages for JWT: Many are available eg jwt-simple in the app (part-3, checkout tokens branch)
- The secret is not part of the JWT web token
- Claims are part of the Payload
- Simple demo flow: 
- 1. consumer invokes the token endpoint with the credentials in the body
- 2. credentials are used to issue a token
- 3. Token is stored to a in memory token store tokenstore.js
- 4. Token is returned to the client
- 5. Client calls a private route with the token in the header
- 6. The token is validated against the token store
- 7. The client is authorized

## JWT Authentication Middleware
- The code in part-3 branch "tokens" provides a JSON Web Token (JWT) authentication middleware that issues tokens for authenticated users. It uses the `jwt-simple` library for encoding and decoding JWTs.
- Read the flow in the app to understand the flow
- Token provision and server side storing via name, password in the body on the /token route
- middleware with a validator for subsequent requests to /private to simulate a private resource
- use the x-acme-token header and provide the base64 encoded token in the header
- Run the code: npm i, then node app.js

### Explanation
- The code defines a set of JWT parameters and a function to issue tokens based on user credentials.
- JWT Parameters: 

```javascript
var jwtParams = {
    JWT_TOKEN_SECRET: 'whateversecret', // The secret key used to encode and decode JWTs
    JWT_TOKEN_ISSUER: 'ACME Travels',  // The issuer of the token
    ACME_TOKEN_HEADER: 'x-acme-token', // The custom header for storing the JWT in HTTP requests (not used in this code)
    JWT_TOKEN_EXPIRY: 30,              // Set to expiry after 30 seconds
};
```

#### `auth` Function
```javascript
var auth = function (req, res) {
    // ... (code omitted for brevity)

    if (user) {
        // Authenticated

        // Generate the token expiration time
        var expires = moment().add(jwtParams.JWT_TOKEN_EXPIRY, 'seconds').valueOf();

        // Create the payload (data to be stored in the token)
        var payload = {
            exp: expires,
            iss: jwtParams.JWT_TOKEN_ISSUER,
            name: user.name,
            email: user.email
        };

        // Encode the token with the payload and secret key
        var token = jwt.encode(payload, jwtParams.JWT_TOKEN_SECRET);

        // Add the token to a token store (not shown in this code)

        // Return the token to the caller
        res.json({ token: token });
    } else {
        // User not found or password incorrect
        res.sendStatus(401);
    }
};

exports.auth = auth;
exports.params = jwtParams;
```

### How to Use
1. Import the `jwt-simple`, `moment`, `users`, and `tokenstore` modules.
2. Set the JWT parameters (`JWT_TOKEN_SECRET`, `JWT_TOKEN_ISSUER`, and `JWT_TOKEN_EXPIRY`) based on your requirements.
3. Call the `auth` function passing the user credentials (username and password) in the request body.
4. If the user is authenticated, the function generates a JWT token and sends it back to the client.
- Remember to implement the token store (`tokenstore`) to store
- manage issued tokens securely, preventing token reuse and unauthorized access.

**Note:** This code is a basic example for educational purposes only. In a real-world scenario, ensure you use secure practices, such as hashing passwords and implementing proper token storage, to enhance security and protect sensitive user data.

### `user.js` - User Data and Authentication
- This `user.js` file contains the hardcoded user data for testing authentication
- Also containts a function to check user credentials against the stored data.

### User Data
```javascript
// Hardcoded users for testing
// Can be changed to store the users in a database
var users = [
    { id: 1, name: "jim", email: "jim@mail.com", password: "jim123" },
    { id: 2, name: "sam", email: "sam@mail.com", password: "sam123" }
];
```

The `users` array contains test user objects, each having an `id`, `name`, `email`, and `password` field. In a real-world scenario, this data would typically be stored in a database rather than hardcoded.

### Authentication Functio
```javascript
var checkCredentials = function (username, password) {
    // Check if username/password are valid
    var user = users.find(function (u) {
        return u.name === username && u.password === password;
    });

    return user;
};

exports.checkCredentials = checkCredentials;
```

The `checkCredentials` function takes a `username` and `password` as input and compares them against the `users` data to find a matching user. If the credentials are valid, the function returns the user object. Otherwise, it returns `undefined`.

### How to Use
1. To use this `user.js` file, import it in your main application file (e.g., `app.js`) where authentication is handled:

```javascript
var users = require('./path/to/user');
```

2. Call the `checkCredentials` function, passing the `username` and `password` as parameters:

```javascript
var user = users.checkCredentials('jim', 'jim123');
```

The `user` variable will contain the matching user object if the provided credentials are valid. If the credentials are invalid, `user` will be `undefined`.

**Note:** In a real application, you would typically retrieve user data from a database, securely hash passwords, and implement additional security measures to protect user information. Hardcoding user data should only be used for testing and educational purposes.

### jwtParams
```javascript
var jwtParams = {
    JWT_TOKEN_SECRET: 'whateversecret', // Secret key used to encode and decode JWTs
    JWT_TOKEN_ISSUER: 'ACME Travels',   // The issuer of the token
    ACME_TOKEN_HEADER: 'x-acme-token',  // Custom header for storing the JWT in HTTP requests (not used in this code)
    JWT_TOKEN_EXPIRY: 30,               // Expiry time for the JWT (set to expire after 30 seconds)
};
```

1. `JWT_TOKEN_SECRET`: This parameter represents the secret key used to sign (encode) and verify (decode) JSON Web Tokens. It should be kept secure and should not be shared publicly.

2. `JWT_TOKEN_ISSUER`: The issuer is the entity that issued the JWT. In this case, it's set to 'ACME Travels', indicating that tokens generated by this application are issued by ACME Travels.

3. `ACME_TOKEN_HEADER`: This parameter indicates a custom header for storing the JWT in HTTP requests. However, this specific header is not used in the code provided.

4. `JWT_TOKEN_EXPIRY`: The JWT token's expiration time, which is set to 30 seconds in this example. After this duration, the token will be considered invalid. The expiration time helps to limit the window of opportunity for attackers to misuse a stolen token.

Remember to keep sensitive information like `JWT_TOKEN_SECRET` secure and avoid using short expiration times unless required for specific use cases (e.g., short-lived tokens for specific actions). In a real-world application, you may want to adjust the token expiration to a more appropriate value based on your application's security and usability requirements.

### Securing API with API Key & Secret
- Unlike in basic OAuth, the API consumer does not send the credentials, but API Key + Signature
- The API provider stores a secret
- API key = client id + client key
- E.g. a signature gets hashed with a secret and the HTTP header as the payload on which the signature is applied
- That signature is base64 encoded and the provider (e.g. Amazon with S3) validates using the secret
- API Key and Secret is used in authentication, analytics, getting tokens (mobile application), rate limiting (calls/minute)
- Decisions for API Key & Secret/Signature by the API designer: send in HTTP header, Query paramter, or Request body
- Decisions for API Key & Secret/Signature by the API designer: API key & secret management e.g. database to store them, interface to validate
- Decisions for API Key & Secret/Signature by the API designer: API key/secret provisioning to the application developer
- Decisions for API Key & Secret/Signature by the API designer: How to do rate limiting and analytics
- Can be challenging, so you might use an API Management platform to manage the API without writing the code in the API itself

### OAuth 2.0
- flexible authorization framework
- defined in RFC6749
- Uses different types of tokens
- Describes 5 methods (grants) for acquiring access tokens
- End user in control of their data (scope)
- Application and provider need API Key & Secret
- Used in Authorirization Scope Grant, sometimes refered to as social login scheme
- Find an example of flows for various use cases on Microsoft [Token grant flows](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)
- Study the explicit flow utilized by the provider and use case as they are subject to design decision
- OAuth2.0 design decisions: Scopes of user data (API), types of OAuth grants to be supported: Authorization, implicit Grant, client credentials
- Implementing OAuth2.0 can take place manually but a OAuth2.0 service provider is recommended, OAuth2.0 is a defacto standard

### OAuth 2.0 Grant Types
OAuth 2.0 defines five major grant types, also known as authorization flows, that provide different ways for clients (applications) to obtain access tokens from the authorization server. Each grant type is suited for different use cases and provides varying levels of security and user experience. Here's a brief description of the five major grant types in OAuth 2.0:

** 1. Authorization Code Grant Type (Authorization Code Flow)**

This is the most commonly used and secure OAuth 2.0 flow for web applications and confidential clients. It involves a two-step process:

- The client redirects the user to the authorization server, which asks the user to log in and grant permission to the client.
- After granting permission, the authorization server redirects the user back to the client with an authorization code. The client exchanges this code for an access token by sending a request to the authorization server, along with its client credentials.

The authorization code is short-lived and prevents exposing the access token to the client's front-end. This flow is well-suited for server-to-server communication or situations where client secrets can be securely stored.

** 2. Implicit Grant Type (Implicit Flow)**

This flow is optimized for browser-based applications (Single-Page Applications) or mobile apps where the client runs on the user's device. It skips the step of exchanging an authorization code for an access token and directly returns the access token to the client as a URL fragment after the user grants permission. As a result, the access token is exposed to the client-side JavaScript.

Since the access token is visible to the client, this flow is less secure than the Authorization Code Flow. Therefore, it's typically used for applications that don't have a secure server-side component.

** 3. Resource Owner Password Credentials Grant Type (Password Flow)**

This flow allows the client to obtain an access token by directly exchanging the user's username and password credentials with the authorization server. This means the client can act on behalf of the user without involving a redirect to the authorization server.

The Password Flow should be used with caution, as it requires the client to handle the user's credentials directly. It is generally recommended only for trusted first-party applications where the client and authorization server belong to the same organization.

** 4. Client Credentials Grant Type (Client Credentials Flow)**

The Client Credentials Flow is used when the client itself (not on behalf of a user) needs to access protected resources. The client directly exchanges its client credentials (client ID and client secret) with the authorization server to obtain an access token.

This flow is commonly used for machine-to-machine communication, where the client is a backend service that needs access to resources without user context.

** 5. Refresh Token Grant Type (Refresh Token Flow)**

The Refresh Token Flow allows clients to obtain a new access token without requiring the user to re-authenticate. After the initial authentication using one of the previous flows, the authorization server issues a refresh token along with the access token.

When the access token expires, the client can use the refresh token to request a new access token, allowing for seamless, long-term access to protected resources without user involvement. Refresh tokens have a longer lifetime than access tokens and should be securely stored by the client.

Each grant type has its own use case and security considerations, and it's essential to choose the appropriate flow based on your application's requirements and security needs.


### Common Functional Attacks
In software development, functional attacks refer to various malicious activities that exploit vulnerabilities in an application's functionality to gain unauthorized access, manipulate data, or disrupt normal operations. Understanding and addressing these common functional attacks is crucial for building secure and robust applications. Here are some of the most prevalent functional attacks and their brief descriptions:

**1. SQL Injection (SQLi)**

SQL Injection occurs when an attacker inserts malicious SQL code into an application's input fields, allowing unauthorized access to a database or sensitive information. It takes advantage of improper input validation and can lead to data leaks, data manipulation, or even complete database compromise.

**2. Cross-Site Scripting (XSS)**

Cross-Site Scripting involves injecting malicious scripts into web pages viewed by other users. It targets client-side scripts executed by the victim's browser and can lead to theft of cookies, session hijacking, or other actions on behalf of the victim.

**3. Cross-Site Request Forgery (CSRF)**

Cross-Site Request Forgery occurs when a malicious site tricks a user's browser into making an unintended request to a target site where the user is authenticated. This attack can lead to unauthorized actions on the target site on behalf of the victim.

**4. Remote Code Execution (RCE)**

Remote Code Execution is an attack that allows an attacker to run arbitrary code on a vulnerable system. It typically occurs due to insecure deserialization or input validation, giving attackers unauthorized access and control over the application.

**5. XML External Entity (XXE)**

XML External Entity attacks exploit vulnerabilities in XML parsers, allowing attackers to read sensitive data, perform denial-of-service attacks, or escalate privileges by manipulating XML entities.

**6. Security Misconfigurations**

Security misconfigurations refer to mistakes made during the setup and configuration of applications, servers, or databases. These errors can expose sensitive information, grant excessive permissions, or create unnecessary attack surfaces.

**7. Insecure Direct Object References (IDOR)**

Insecure Direct Object References occur when an attacker can directly access or modify resources by manipulating references (e.g., IDs, filenames) in an application's URLs or parameters. This can lead to unauthorized access to sensitive data or actions.

**8. Insecure File Upload**

Insecure File Upload attacks exploit weaknesses in file upload mechanisms, allowing malicious files to be uploaded and executed on the server, potentially leading to remote code execution or unauthorized access.

**9. Server-Side Request Forgery (SSRF)**

Server-Side Request Forgery involves an attacker making requests from the target server to internal or external resources, leading to potential data exfiltration, service disruption, or attacks on internal systems.

**10. Denial-of-Service (DoS and DDoS)**

Denial-of-Service attacks aim to overwhelm a system or network, causing it to become unresponsive or unavailable. Distributed Denial-of-Service (DDoS) attacks use multiple sources to amplify the impact.

**11. Fuzzing**

Fuzzing is a security testing technique where automated tools inject random and invalid data into an application to identify vulnerabilities or crashes. It helps discover unknown flaws in an application by generating unexpected inputs and observing the application's behavior.

### OWASP 
- Website https://www.owasp.org
- Best practices for Rest API security

### Solutions to functional attacks
Protecting against functional attacks requires a combination of secure coding practices, input validation, output encoding, and proper security configurations. Regular security assessments, code reviews, and penetration testing are essential to identify and mitigate vulnerabilities in an application. By being aware of these common functional attacks and employing best security practices, developers can significantly reduce the risk of security breaches and safeguard sensitive data.
- Follow best practice
- Create a process for code review
- Test & Monitor
- Select a security model
- Consider an API gateway or an API management solution
- Set aside a budget for API testing

## Rest API Specifications using Swagger
- The Rest API specification is an embodyment of the contract between the API provider and the API consumer
- Contract creation approaches: Contract Last, Contract First
- Contract last: Specs after the code
- Contract first: code template based on the contract (recommended)
- Specifications: Analysis -> Specifications -> Mocking & Validation -> Requirements -> Analysis
- Specifications -> REST API
- REST API Specification standards: WADL, SWAGGER, apiblueprint, apiary, RAWML
- SWAGGER seems to be the de facto standard
- SWAGGER is widly supported https://www.github.com/swagger-api
- SWAGGER creates a developer documentation, automated proxy creation, server code generation, client code generation
- Recommended: Contract first approach + collaborative process with Swagger
- Use the tools for Swagger: developer docs, proxy generation, client code generation, mocks

### Swagger/OAI Specifications
- Swagger can specifications in YAML (also json or xml)
- YAML is good for human consumption
- YAML is a data serialization language like XML, JSON, mostly used for configs
- Superset of JSON
- Editor tools: Any YAML editor is okay
- editor.swagger.io is an online editor that shows the UI output
- Creation: Model it, try it eg with Node, write 6 realize it, publish
- more [swagger.io](https://swagger.io/docs/)
- tutorial [swagger-tutorial](https://support.smartbear.com/swaggerhub/docs/tutorials/writing-swagger-definitions.html)

## API management

### Section 1: API Management Platforms

This section provides a brief overview of three popular API management platforms: Mulesoft Anypoint Platform, IBM Bluemix API Manager, and Apigee.

### 1.1 Mulesoft Anypoint Platform

Mulesoft Anypoint Platform is a comprehensive integration and API management platform that enables organizations to design, build, manage, and monitor APIs. It offers a range of tools and services to streamline the entire API lifecycle, from creation to retirement.

Key features of Mulesoft Anypoint Platform include:

- **API Design and Build:** Anypoint Platform allows developers to create APIs using RAML (RESTful API Modeling Language) and build API implementations using Mule runtime engine.

- **API Gateway:** It includes an API gateway that enables secure and reliable access to APIs, handling authentication, authorization, rate limiting, and other policies.

- **API Analytics:** Anypoint Platform provides detailed analytics and monitoring capabilities to track API performance, usage patterns, and identify issues.

- **API Lifecycle Management:** The platform facilitates versioning, documentation, and automated deployment of APIs throughout their lifecycle.

### 1.2 IBM Bluemix API Manager

IBM Bluemix API Manager, part of the IBM Cloud platform, is designed to create, manage, and secure APIs. It is geared towards enterprises looking to accelerate API development and deployment.

Key features of IBM Bluemix API Manager include:

- **API Creation and Assembly:** The platform enables developers to create APIs using various technologies and assemble them into composite APIs.

- **API Security:** Bluemix API Manager offers robust security mechanisms, including OAuth, to control access to APIs and protect sensitive data.

- **API Analytics and Monitoring:** It provides analytics to gain insights into API usage, performance, and health.

- **Developer Portal:** The platform offers a developer portal to engage with developers, share API documentation, and foster collaboration.

### 1.3 Apigee

Apigee, now a part of Google Cloud, is a full-featured API management platform that empowers organizations to design, deploy, and scale APIs securely.

Key features of Apigee include:

- **API Proxy:** Apigee acts as a proxy between the backend services and the developers, offering security, caching, rate limiting, and other functionalities.

- **API Analytics:** The platform provides detailed analytics and reports on API performance, traffic, and usage patterns.

- **API Developer Portal:** Apigee offers a customizable developer portal to onboard developers, publish API documentation, and provide support.

- **API Monetization:** It includes features to support API monetization strategies and manage API subscriptions.

## Section 2: Developer Portals

This section covers essential elements of developer portals that enhance the API developer experience.

### 2.1 API Documentation

Clear and comprehensive API documentation is critical for developers to understand the capabilities and proper usage of APIs. It should provide detailed explanations, code samples, request/response examples, and authentication methods.

### 2.2 Self-Service Provisioning

A self-service provisioning feature allows developers to sign up, request API access, and obtain API keys or credentials without manual intervention. This streamlines the onboarding process and accelerates development.

### 2.3 Support (FAQ and Forums)

Developer portals should include support mechanisms, such as Frequently Asked Questions (FAQs) and forums. The FAQ section addresses common queries, while forums enable developers to seek help from the community or support personnel.

### 2.4 Interactive API Testing

To facilitate quick testing and experimentation, an interactive API testing console can be included in the developer portal. This allows developers to make API calls directly from the portal and view responses.

### 2.5 API Versioning Information

Clearly displaying API versioning information helps developers understand the stability and backward compatibility of different API versions.

### 2.6 Sample Code and SDKs

Providing sample code in various programming languages and Software Development Kits (SDKs) simplifies API integration for developers using different technologies.

### 2.7 Rate Limiting and Quotas

Information about rate limiting and quotas for API usage should be available in the developer portal, ensuring developers can plan their implementations accordingly.

### 2.8 Interactive API Console

An interactive API console enables developers to explore and interact with APIs directly within the developer portal, making it easier to understand API endpoints and their functionalities.

## API Traffic Management

API traffic management refers to the process of controlling and optimizing the flow of data and requests between clients and APIs. It involves implementing various strategies and policies to ensure the reliability, security, and efficiency of API interactions. Effective traffic management is crucial for maintaining a high-performing and secure API ecosystem, especially in scenarios where APIs experience heavy usage or varying traffic patterns.

### Key Aspects of API Traffic Management:

### 1. **Rate Limiting:**
Rate limiting is a mechanism used to control the number of requests a client can make to an API within a specific timeframe. By enforcing rate limits, API providers can prevent abuse, protect their infrastructure from overload, and ensure fair access to resources for all users. Rate limits can be applied globally or tailored to specific clients based on their subscription level or usage tier.

### 2. **Caching:**
Caching involves storing the responses of frequently requested API endpoints temporarily. When subsequent requests are made for the same resources, the cached response can be served, reducing the need for repeated processing and database queries. Caching significantly improves API performance and reduces server load, especially for read-heavy APIs.

### 3. **Load Balancing:**
Load balancing distributes incoming API requests across multiple backend servers to ensure even distribution of the workload and prevent any single server from becoming overwhelmed. This increases the API's capacity to handle a larger volume of requests, improves response times, and enhances overall reliability.

### 4. **Connection Pooling:**
Connection pooling involves reusing established connections between the API gateway (or proxy) and the backend server to minimize the overhead of establishing new connections for each request. This optimizes resource usage and reduces latency, particularly in scenarios with high concurrency.

### 5. **Security Measures:**
API traffic management includes implementing security measures such as authentication, authorization, and encryption to protect APIs from unauthorized access and potential threats. OAuth, API keys, JWT (JSON Web Tokens), and SSL/TLS encryption are common security mechanisms used in API traffic management.

### 6. **Traffic Analytics and Monitoring:**
API traffic management involves tracking and analyzing API usage patterns, traffic volume, response times, error rates, and other metrics. Real-time monitoring helps identify bottlenecks, potential issues, and unusual activity, enabling proactive measures to maintain optimal performance.

### 7. **API Throttling:**
API throttling is a process of limiting the number of requests or transactions per unit of time for a specific API or client. It helps in controlling API traffic during peak loads or for clients that exceed their allocated usage limits. Throttling can be adaptive, adjusting dynamically based on server load, or fixed, imposing a constant limit.

### 8. **Content Compression:**
Compressing API responses before sending them to clients can reduce the payload size and lower the bandwidth requirements. This improves API performance, especially for clients with limited network bandwidth.

### 9. **Failover and Redundancy:**
To ensure high availability and reliability, API traffic management may involve setting up failover mechanisms and redundancy. This includes replicating API endpoints across multiple data centers or cloud regions so that if one location experiences an outage, traffic can be rerouted to a backup location.

API traffic management plays a vital role in maintaining a stable and performant API ecosystem, meeting the demands of developers and end-users while ensuring the security and integrity of the underlying infrastructure. It is an ongoing process that requires continuous monitoring, analysis, and adjustment to accommodate changing traffic patterns and evolving business needs.
