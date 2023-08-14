const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NMZpwSI9H2qoQu1vU1omi7CUPsjyt79iAH2iXYaeFO17P32JV2dpYTYDwifi5991jW6XaD2PbMvc0O1rG3Qwp0800x9e3qVOq"
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const { total } = request.query;
  // const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",
    description: 'One-time setup fee',
    name: 'Jenny Rosen',
    address: { 
                },
    
  });

  // Send the client secret as the response
  response.status(201).json({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51NMZpwSI9H2qoQu1vU1omi7CUPsjyt79iAH2iXYaeFO17P32JV2dpYTYDwifi5991jW6XaD2PbMvc0O1rG3Qwp0800x9e3qVOq"
// );

// // API

// // - App config
// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// // - API routes
// app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // subunits of the currency
//     currency: "usd",
//   });

//   // OK - Created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// // - Listen command
// exports.api = functions.https.onRequest(app);



// app.post("/payments/create", (req, res) => {
//   const total = calculateTotal(); // Replace this with your logic to calculate the total amount

//   console.log("Payment Request Received BOOM!!! for this amount >>>", total);

//   // Check if the total is greater than or equal to 1
//   if (total < 1) {
//     // Return an error response if the total is invalid
//     res.status(400).json({ error: "Invalid total amount" });
//     return;
//   }

//   // Generate the payment intent
//   stripe.paymentIntents
//     .create({
//       amount: total,
//       currency: "usd",
//     })
//     .then((paymentIntent) => {
//       // Return the client secret
//       res.status(200).json({ clientSecret: paymentIntent.client_secret });
//     })
//     .catch((error) => {
//       console.error("Error creating payment intent:", error);
//       res.status(500).json({ error: "Failed to create payment intent" });
//     });
// });

// Start the server
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
// Server-side code (e.g., Node.js with Express)
// app.post("/payments/create", async (req, res) => {
//   try {
//     // Generate the payment intent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: req.body.total,
//       currency: "usd",
//     });

//     // Return the client secret in the required format
//     res.status(200).json({
//       clientSecret: `${paymentIntent.id}_secret_${paymentIntent.client_secret}`,
//     });
//   } catch (error) {
//     console.error("Error creating payment intent:", error);
//     res.status(500).json({ error: "Failed to create payment intent" });
//   }
// });



// example endpoint
// (http://127.0.0.1:5001/clone-49da6/us-central1/api)

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
