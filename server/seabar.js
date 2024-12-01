const express = require("express");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

// Auth0 Config
const AUTH0_DOMAIN = "dev-h32e7d3l5lrftxe4.us.auth0.com";
const AUTH0_AUDIENCE = "https://dev-h32e7d3l5lrftxe4.us.auth0.com/api/v2/";

// MongoDB Config
const MONGO_URI = "mongodb+srv://seabar:12345@hackwestern11.rpeel.mongodb.net/?retryWrites=true&w=majority&appName=HackWestern11";
const client = new MongoClient(MONGO_URI);

const { expressjwt: jwt } = require("express-jwt");

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: AUTH0_AUDIENCE,
  issuer: `https://${AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});


// Connect to MongoDB
client.connect();
const db = client.db("HackWestern11");
const users = db.collection("user");

// API Endpoint to retrieve or add user
app.post("/api/users", async (req, res) => {
  const { email, nickname, sub } = req.body;

  try {
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.json(existingUser);
    }

    const newUser = {
      auth0Id: sub,
      email,
      nickname,
      createdAt: new Date(),
    };

    await users.insertOne(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to handle user" });
  }
});


// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
