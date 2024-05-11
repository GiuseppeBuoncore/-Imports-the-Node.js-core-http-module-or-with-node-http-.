import { createServer } from "node:http"; /*  Imports the Node.js core http module (or with node:http). */

const server = createServer((request, response) => {
  /* Creates an HTTP server with the http.createServer method. */
  console.log("request received");

  response.statusCode = 200; /*   Set the response status code to 200 */

  response.setHeader(
    "Content-Type",
    "text/html"
  ); /*  Sets the response header: Content-Type: text/html */

  response.end(
    /* Sends an HTML response body containing any message. */
    "<html><body><h1>hello world!</h1></body></html>"
  );
});

server.listen(3000, () => {
  /*  Make the server listen to the port 3000 */
  console.log(`server running at http://localhost:3000`);
});
