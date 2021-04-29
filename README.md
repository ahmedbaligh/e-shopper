# e-Shopper

E-commerce web application where users can browser products, add items to the cart, proceed to checkout, and pay with credit card.

## Features and Functionality

- In the landing page, you can:

  - Browse all available products in the store and see their name, description, price.
  - Add products to your shopping cart.

- In the Cart page, you can:

  - See the quantity and the total price of each product.
  - Increase and decrease the quantity of each product.
  - Remove each product completely.
  - Empty the entire cart.
  - See the total price of all of your in-cart items.
  - Proceed to checkout.

- In the Checkout page, you can:

  - Enter your personal information and shipping details.
  - See available shipping countries, subdivisions, and options based on your in-cart combination of products and their shipping options.
  - See a final summary of your order constituents (each of their quantities and price) and the total price after all additional fees (e.g. shipping).
  - Enter credit card details (card number, expiry date, cvv).
  - Get your order reference number if your purchase is successful, or otherwise, the cause of the occurring error.

## Getting Started

### API Keys

You need to get your [Commerce.js](https://commercejs.com/) API key. First, sign up for an account and then head to [your developer page](https://dashboard.chec.io/settings/developer) and copy your `Sandbox Public Key`.

You also need a [Stripe](https://stripe.com/) API key. Sign up for an account, then go your [API keys page](https://dashboard.stripe.com/test/apikeys) and get your `Publishable key`.

Create a `.env.local` file and inside it do the following:

```txt
REACT_APP_CHEC_PUBLIC_KEY=<your_commerce.js_key>
REACT_APP_STRIPE_PUBLIC_KEY=<your_stripe_key>
```

**_Make sure to integrate Stripe with your Commerce.js account in the [Payment gateways](https://dashboard.chec.io/settings/payment) tab in your dashboard._**

### Installing Dependencies

Make sure to have [yarn](https://yarnpkg.com/getting-started/install) installed in your machine. Navigate to the root directory and run:

```bash
yarn
```

### Running the Server

To run the server, execute:

```bash
yarn start
```

This will start the server on [http://127.0.0.1:3000/](http://127.0.0.1:3000/) in development mode.

## Acknowledgements

This app is created with the help of this [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A)'s awesome [tutorial](https://youtu.be/377AQ0y6LPA).

The backend API of this app is handled through [Commerce.js](https://commercejs.com/) API. Payment handling is done using [Stripe](https://stripe.com/).
