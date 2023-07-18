# RESTful

This repo is a track to cover

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
1.10 API Management<br>

**2. RESTful API  With Express Framework Crash Course**<br>
2.1 APIs and server<br>
2.2 CRUD operations<br>

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
3.33 Deno, CRUD & Databases (MongoDB)<br>

## 1.Rest Design Pattern Security

## This project uses
- MongoDB
- Swagger editor
- IBM API Connect
- Mulesoft
- apigee

## Evolution of RESTful services

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


## REST API Architectural Contraints

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

## Designing REST API

