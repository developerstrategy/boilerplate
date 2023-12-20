require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async ({ body }) => {
  const input = JSON.parse(body);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: 'http://localhost:8888/success',
    cancel_url: 'http://localhost:8888/cancel',
    line_items: [
      {
        price: input.price_id,
        quantity: 1,
      }
    ],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      sessionUrl: session.url
    }),
  };
};
