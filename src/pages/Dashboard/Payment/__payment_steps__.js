/**
 * 1. Install stripe and stripe react
 * 2. Create card element
 * 3. Create stripe account and get publishable key
 * 4. Use publishable key and use Stripe to get card information and error
 * 5. Create payment intent post on the server and return client secret. Install stripe on server side to get client secret. Make sure you used --> payment_method_types: ["card"]
 * 6. From the client side, get the client secret and save it.
 * 7. Use 'confirmCardPayment' and pass user information, card and client secret.
 * 8. Display transaction id.
 */