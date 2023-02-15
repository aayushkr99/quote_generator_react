# quote_generator_react

Our quote generator will need to use the useEffect hook to perform a "side effect" to fetch the quotes from an external API. After fetching our quotes, we will put them in our local app state, which we will call quotes.

We'll then take that array of quotes and use a function to select a random item within that array. Then we'll put it in another state variable called just quote, which can then be displayed to our user.

We also want to add a "New Quote" button above each quote that will perform the same operation – get a new random quote from our quotes array and put it in quote.

Finally, the quote isn't loaded in state. So we'll make sure to use the optional chaining operator (?) to safely check our object before we attempt to get a value from that quote in state to make sure our app doesn't throw an error.

React concepts you will learn -- 
  * useEffect (to perform side effects)
  * HTTP requests with Fetch API
  * Conditional chaining operator (?)
