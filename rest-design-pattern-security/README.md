# Rest design pattern security

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
- ![Image](./rmm.png | width=300)



### REST API architectural constraints - client server
- Client requests the resource
- Server serves the resource on request, can be multiple clients
- Client and server don't run in the same process space
- The client makes requests through a network, they maintain the uniform interface, the contract
- This is called 'seperation of concerns'
- ![Image](./soc.png | width=300)

