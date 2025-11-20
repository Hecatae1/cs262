hi
link :<https://github.com/Hecatae1/monopoly-service>
azure: <https://monopoly-service-fwb0djd9etgre8cr.mexicocentral-01.azurewebsites.net/games>
Web service
In the lab, you forked your service repo rather than simply cloning it. Was this appropriate? Why or why not?

Forking the repo was appropriate because it gave me my own copy under my GitHub account, allowing me to push changes without affecting the original. Cloning alone would have limited me to local changes unless I had write access to the upstream repo.

Which of the endpoints implement actions that are idempotent? nullipotent?
Is the service RESTful? If not, why not? If so, what key features make it RESTful.

- Idempotent: GET /games, GET /players, and DELETE /game/:id are idempotent
- Nullipotent: Endpoints that don’t change state and don’t even require resources, like a health check endpoint GET /status
-- The service is mostly RESTful because it uses clear resource-based URIs (/games, /players), standard HTTP methods (GET, POST, DELETE), and stateless interactions

Is there any evidence in your implementation of an impedance mismatch?
There is some evidence of impedance mismatch between the relational database schema and the object-oriented service layer.

Client
Would it be better to access the database using monopolyDirect.ts (simpler) rather than using this Web service (more complex)? Why or why not?

- Using monopolyDirect.ts would be simpler, but it tightly couples the client to the database schema. The Web service adds complexity but is better long-term because it abstracts the database.

You implemented deleteGame and fetchPlayers using useCallBack. What good does this do?

- Wrapping these functions in useCallback prevents unnecessary re-creations of the functions on every render.

How effectively did Copilot work for you on this assignment? Include examples of things that it did correctly and/or incorrectly.

- Copilot was helpful in generating boilerplate code for endpoints and React hooks. For example, it correctly scaffolded a fetchPlayers function with proper async/await syntax
it also helped in rephrasing my sentences in this file.
