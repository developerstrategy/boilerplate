const fetch = require("node-fetch");

fetch('http://localhost:8888/.netlify/functions/stripe-checkout-session',
{
  method: 'POST',
  body: JSON.stringify({ price_id: 'price_1OOyYYCx4zIW5HJpEY2mfZL3'})
}).then(res => {
    res.json().then(data => {
        console.log(data)
        return data;
    });
});
