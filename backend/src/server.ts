import serverConfig from "./config/server.config";

// defind port - if not defind in .env port default is 3000
const port = process.env.PORT || 3000;

// defind server config
const app = serverConfig()

// Start the Express server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
