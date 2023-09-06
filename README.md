[

Documentation
---------------------
Each form utilises the Axios fetch method and is implemented via the useEffect method from React. Each requesting different aspects of the current server information. The main way to achieve a categorised storefront was by filtering what the axios method would pull from the server. By using .filter I was able to asign items in the product array according to their category. This way each page does not have overlapping items. From this the main method of navigation is by using Routes via the react-router-dom implementation method. Using Routes allows me to create inbedded links to each page and on top of that allow for quick switching between forms. 

The Cart is built by utilising session storage to maintain the users cart information which is pulled from each form after adding an item to the cart. This method has allowed me to store the user's selection within the browser session so that the user can move through the website without losing their cart information. 

Completed Goals - Current
---------------------
* Apparel.js
* Jewelleryshop.js
* HomeAndGarden.js
* Navbar.js
* Navbar.css
* App.js
* Image display
* Cart
* Css
](https://projectt-gqch.onrender.com
Website may take a second to spin up due to render's power down state system

Documentation
---------------------
# App.js

**Overview:**
The `App.js` file is the entry point of the React application. It sets up the routing, manages the shopping cart state, and renders different components based on the current route.

**Functionality:**

1. **State Management:**
   - It uses the `useState` hook to manage the state of the shopping cart (`cart`) as an array.
   - The `useEffect` hook initializes the `cart` state by retrieving data from the browser's sessionStorage, or it initializes it as an empty array if no data is found.

2. **Routing:**
   - The application uses React Router (`BrowserRouter`, `Routes`, and `Route`) to handle client-side routing.
   - It imports and renders different components based on the URL route. For example, it renders `Jewelleryshop`, `Apparel`, and `HomeAndGarden` components for specific routes.

3. **Cart State Management:**
   - The `updateCart` function is passed down to child components via props. It allows child components to update the cart state and also persists the cart data in the browser's sessionStorage.

4. **Components:**
   - `Navbar` component is imported and rendered to provide navigation links.
   - `Jewelleryshop`, `Apparel`, `HomeAndGarden`, `Cart`, and `Checkout` components are imported and rendered based on the current route.

**Routes:**
- `/JewelleryShop`: Renders the `Jewelleryshop` component.
- `/Cart`: Renders the `Cart` component, displaying the user's shopping cart.
- `/Apparel`: Renders the `Apparel` component for shopping apparel products.
- `/HomeAndGarden`: Renders the `HomeAndGarden` component for home and garden products.
- `/checkout`: Renders the `Checkout` component for processing orders.

**Notes:**
- This application uses React Router for client-side navigation.
- It maintains the shopping cart's state and handles cart updates.
- The cart data is stored in sessionStorage for persistence.

This `App.js` file serves as the main configuration and routing hub for the entire React application, orchestrating the display of different components based on user navigation.

# Navbar.js

**Overview:**
The `Navbar.js` file defines the navigation bar component (`Navbar`) for the React application. It provides links to different sections of the e-commerce website and displays the user's name if available.

**Functionality:**

1. **State Management:**
   - The `useState` hook is used to manage the `activeuser` state, which represents the currently logged-in user.
   - An initial state of `null` is set for `activeuser`.

2. **User Information:**
   - The `useEffect` hook makes an HTTP GET request to `/users` (assumed to be an API endpoint) to retrieve user data. It expects an array of user objects.
   - It then uses `find` to locate the user with `id` equal to 1 (assuming it's the logged-in user) and sets the `activeuser` state with the user's data.

3. **User Content:**
   - The `userContent` variable conditionally renders user information if `activeuser` is available. It displays a welcome message with the user's first and last names.

4. **Navigation Bar:**
   - The navigation bar is created using an HTML `<nav>` element with the class `Navbar`.
   - The navigation links (`Link`) from the `react-router-dom` library are used to navigate to different sections of the website.
   - The links include "Jewellery," "Apparel," "Home And Garden," and a shopping cart icon.
   - The shopping cart icon is rendered using the `ShoppingCart` component from the `phosphor-react` library.
   - The `userContent` (user information) is displayed next to the navigation links if available.

**Routes:**
- `/Jewelleryshop`: Navigates to the Jewellery shop section.
- `/Apparel`: Navigates to the Apparel section.
- `/HomeAndGarden`: Navigates to the Home And Garden section.
- `/Cart`: Navigates to the shopping cart section.

**Notes:**
- The `Navbar` component provides a consistent navigation structure for the website.
- It retrieves user information and displays a welcome message if a user is logged in.
- Navigation links allow users to explore different sections of the e-commerce site seamlessly.

This `Navbar.js` file plays a crucial role in enhancing user experience by providing navigation and personalized information for logged-in users.

# Jewelleryshop.js

**Overview:**
The `Jewelleryshop.js` file defines the component (`Jewelleryshop`) responsible for displaying and handling the products in the "Jewellery" category on the e-commerce website.

**Functionality:**

1. **State Management:**
   - The `useState` hook is used to manage the `jewelleryProducts` state, which stores an array of jewellery products.
   - An initial empty array is set as the default state for `jewelleryProducts`.

2. **Fetching Data:**
   - The `useEffect` hook is used to make an HTTP GET request to the `/products` endpoint (assumed to be an API endpoint).
   - The response data is filtered to include only products with the category "jewellery," and the filtered data is set in the `jewelleryProducts` state.

3. **Add to Cart:**
   - The `addToCart` function allows users to add products to their cart. It takes a `product` as a parameter.
   - It logs the action to the console and updates the cart by creating a new array (`updatedCart`) with the existing cart items and the selected product. The updated cart is then passed to the `updateCart` function.

4. **Displaying Products:**
   - The component maps through the `jewelleryProducts` array and renders product information for each item.
   - Displayed product information includes the product title, category, vendor, tags, inventory, price, and an image.
   - An "Add to Cart" button is provided for each product to allow users to add the item to their cart.

**CSS Styling:**
- The component applies CSS styles defined in the associated "Jewellery.css" file to ensure proper visual presentation.

**Notes:**
- The `Jewelleryshop` component focuses on displaying and managing products in the "Jewellery" category.
- It provides a straightforward user interface for viewing product details and adding them to the cart.
- The component's structure allows for easy extension and customization when adding more features or styles.

This component plays a crucial role in the e-commerce website, helping users browse and purchase jewellery products conveniently.

# HomeAndGarden.js

**Overview:**
The `HomeAndGarden.js` file defines the component (`HomeAndGarden`) responsible for displaying and handling the products in the "Home and Garden" category on the e-commerce website.

**Functionality:**

1. **State Management:**
   - The `useState` hook is used to manage the `homeandgardenProducts` state, which stores an array of home and garden products.
   - An initial empty array is set as the default state for `homeandgardenProducts`.

2. **Fetching Data:**
   - The `useEffect` hook is used to make an HTTP GET request to the `/products` endpoint (assumed to be an API endpoint).
   - The response data is filtered to include only products with the category "home-and-garden," and the filtered data is set in the `homeandgardenProducts` state.

3. **Add to Cart:**
   - The `addToCart` function allows users to add products to their cart. It takes a `product` as a parameter.
   - It logs the action to the console and updates the cart by creating a new array (`updatedCart`) with the existing cart items and the selected product. The updated cart is then passed to the `updateCart` function.

4. **Displaying Products:**
   - The component maps through the `homeandgardenProducts` array and renders product information for each item.
   - Displayed product information includes the product title, description, category, vendor, tags, inventory, price, and an image.
   - An "Add to Cart" button is provided for each product to allow users to add the item to their cart.

**CSS Styling:**
- The component applies CSS styles defined in the associated "HomeandGarden.css" file to ensure proper visual presentation.

**Notes:**
- The `HomeAndGarden` component focuses on displaying and managing products in the "Home and Garden" category.
- It provides a straightforward user interface for viewing product details and adding them to the cart.
- The component's structure allows for easy extension and customization when adding more features or styles.

This component plays a crucial role in the e-commerce website, helping users browse and purchase home and garden products conveniently.

# Checkout.js

**Overview:**
The `Checkout.js` file defines the component (`Checkout`) responsible for handling the checkout process in the e-commerce website. It allows users to review their selected items, place an order, and receive a confirmation message.

**Functionality:**

1. **State Management:**
   - The `useState` hook is used to manage the `confirmation` state, which determines whether the checkout process has been confirmed.

2. **Handle Checkout:**
   - The `handleCheckout` function is invoked when the "Checkout" button is clicked.
   - It constructs an `order` object containing the user's order details, such as `id`, `user_id`, `order_date`, `order_status`, `order_total`, and `order_items`.
   - The `order_items` array is constructed by mapping through `cartItems` to create an object for each item with `product_id`, `quantity` (set to 1), and `price`.
   - An HTTP POST request is made to the `/orders` endpoint (assumed to be an API endpoint) with the order object as the request body.
   - If the request is successful, the cart is updated by setting it to an empty array (`[]`), and the `confirmation` state is set to `true`.
   - If an error occurs during the request, an error message is logged to the console.

3. **Display Content:**
   - The component conditionally renders content based on the `confirmation` state.
   - If `confirmation` is `true`, a confirmation message is displayed.
   - If `confirmation` is `false`, the user's cart items are displayed along with a "Checkout" button.

**CSS Styling:**
- The component applies CSS styles defined in the associated "checkout.css" file to ensure proper visual presentation.

**Notes:**
- The `Checkout` component plays a crucial role in the e-commerce website, allowing users to complete their purchase.
- It provides a straightforward user interface for reviewing items and initiating the checkout process.
- The component's structure allows for easy extension and customization when adding more features or styles.

This component enhances the user experience by providing a clear and intuitive way to proceed with the purchase of selected items on the website.

# Cart.js

**Overview:**
The `Cart.js` file defines the component (`Cart`) responsible for displaying the user's shopping cart. It allows users to view and manage items in their cart, proceed to checkout, and displays the total price of the items.

**Functionality:**

1. **Display Cart Items:**
   - The component receives the `cartItems` and `updateCart` as props.
   - It displays a list of items in the user's cart, including the item's title, image, price, and a "Remove" button for each item.
   - The list of cart items is generated using the `map` function, and each item is wrapped in a `div` with a unique `key`.

2. **Remove Items:**
   - The "Remove" button allows users to remove an item from the cart.
   - When the "Remove" button is clicked, the `handleRemove` function is called, which filters the `cartItems` array to exclude the item with the specified `productId`.
   - The updated cart without the removed item is then passed to the `updateCart` function to update the state.

3. **Proceed to Checkout:**
   - A "Checkout" button is provided, which is wrapped in a `Link` component from 'react-router-dom.'
   - When clicked, the user is directed to the '/checkout' route, where they can complete the checkout process.

4. **Total Price:**
   - The component calculates the total price of the items in the cart using the `reduce` function.
   - The total price is displayed at the bottom of the cart.

5. **Empty Cart Message:**
   - If the cart is empty (i.e., `cartItems` is `null` or has a length of 0), a message is displayed informing the user that their cart is empty.

**CSS Styling:**
- The component applies CSS styles defined in the associated "Cart.css" file to ensure proper visual presentation.

**Notes:**
- The `Cart` component is an essential part of the e-commerce website, allowing users to manage their shopping cart.
- It provides a clear and user-friendly interface for reviewing and modifying cart items.
- The "Checkout" button seamlessly integrates with the routing system, making it easy for users to proceed to the checkout process.
- The total price feature helps users keep track of their expenses while shopping.

This component enhances the overall shopping experience on the website by providing an organized and visually appealing shopping cart view.
# Apparel.js

**Overview:**
The `Apparel.js` file defines the component (`Apparel`) responsible for displaying a list of apparel products available for purchase. Users can view product details, add items to their shopping cart, and see whether items are in stock.

**Functionality:**

1. **Display Apparel Products:**
   - The component receives the `cart` and `updateCart` functions as props.
   - It makes an HTTP GET request to the '/products' endpoint using Axios to fetch a list of products.
   - The products are filtered to include only those with the category 'apparel' using the `filter` function.
   - The retrieved apparel products are stored in the `apparelProducts` state using the `setApparelProducts` function.

2. **Add to Cart:**
   - Each product displayed in the list has an "Add to Cart" button.
   - When a user clicks the "Add to Cart" button, the `addToCart` function is called.
   - This function adds the selected product to the shopping cart (`cart`) by creating an updated cart array.
   - The `updateCart` function is called to update the cart's state with the new array, ensuring that the cart is concurrently updated.

3. **Product Details:**
   - For each apparel product, details such as title, description, category, vendor, tags, inventory, price, and an image are displayed.
   - The information is organized using HTML elements like headings (`<h2>`), paragraphs (`<p>`), and an image (`<img>`).

**CSS Styling:**
- The component applies CSS styles defined in the associated "Apparel.css" file to ensure proper visual presentation.

**Notes:**
- The `Apparel` component plays a crucial role in presenting and managing apparel products in the e-commerce website.
- It provides a user-friendly interface for users to browse through apparel items, view product details, and conveniently add items to their shopping cart.
- The dynamic filtering of products based on their category ensures that only relevant apparel products are displayed.
- Users can easily determine whether a product is in stock by checking the inventory information.
- The component contributes to a seamless and enjoyable shopping experience for users looking for apparel items.

This component is an integral part of the website's product catalog, catering specifically to users interested in purchasing apparel.

# server.js

**Overview:**
The `server.js` file defines a Node.js server using the Express.js framework. This server serves as the backend for an e-commerce website, handling various HTTP requests related to products, users, and orders.

**Functionality:**

1. **Dependencies:**
   - The server requires several dependencies, including `express`, `fs` (File System), `path`, `cors` (Cross-Origin Resource Sharing), and the `sampledata.json` file. These dependencies are imported at the beginning of the file.

2. **Express Setup:**
   - An Express app is created using `express()`, and the app instance is stored in the `app` variable.

3. **Middleware:**
   - Middleware functions are added to the Express app:
     - `cors`: Enables Cross-Origin Resource Sharing, allowing the server to respond to requests from different origins.
     - `express.json()`: Parses incoming JSON data in request bodies.

4. **Static File Serving:**
   - The Express app serves static files from the "build" directory. This is typically used for serving frontend assets (HTML, CSS, JavaScript) when deploying a React app.

5. **GET Endpoint - /products:**
   - When a GET request is made to the '/products' endpoint, the server responds with a JSON object containing product data. This data is read from the `sampledata.json` file, specifically the `products` property.

6. **GET Endpoint - /users:**
   - When a GET request is made to the '/users' endpoint, the server responds with a JSON object containing user data. This data is read from the `sampledata.json` file, specifically the `users` property.

7. **POST Endpoint - /orders:**
   - When a POST request is made to the '/orders' endpoint, the server expects an order object in the request body.
   - The server generates a random order ID and assigns it to the order object.
   - The order object is added to the `orders` property in the `sampledata.json` file.
   - The server responds with the created order object.

8. **Server Initialization:**
   - The server listens on a specified port (either from the environment variable `PORT` or the default port 3001).
   - A message is logged to indicate that the server is running and listening on the chosen port.

**Notes:**
- The server primarily serves as an API for the e-commerce website, providing product and user data, as well as handling order submissions.
- It utilizes the Express.js framework for routing and middleware.
- Cross-Origin Resource Sharing (CORS) is enabled to allow the frontend to make requests to this server from different origins, which is common when the frontend and backend are deployed separately.
- The random order ID generation is a simple example and may not be suitable for a production environment.
- The `sampledata.json` file appears to serve as the backend's data store, containing information about products, users, and orders.

This server.js file is a key component in the overall architecture of the e-commerce application, ensuring that data can be retrieved and orders can be processed through HTTP endpoints.


Completed Goals - Current
---------------------
* Apparel.js
* Jewelleryshop.js
* HomeAndGarden.js
* Navbar.js
* Navbar.css
* App.js
* Image display
* Cart
* Css
)https://projectt-gqch.onrender.com
Website may take a second to spin up due to render's power down state system

Documentation
---------------------
# App.js

**Overview:**
The `App.js` file is the entry point of the React application. It sets up the routing, manages the shopping cart state, and renders different components based on the current route.

**Functionality:**

1. **State Management:**
   - It uses the `useState` hook to manage the state of the shopping cart (`cart`) as an array.
   - The `useEffect` hook initializes the `cart` state by retrieving data from the browser's sessionStorage, or it initializes it as an empty array if no data is found.

2. **Routing:**
   - The application uses React Router (`BrowserRouter`, `Routes`, and `Route`) to handle client-side routing.
   - It imports and renders different components based on the URL route. For example, it renders `Jewelleryshop`, `Apparel`, and `HomeAndGarden` components for specific routes.

3. **Cart State Management:**
   - The `updateCart` function is passed down to child components via props. It allows child components to update the cart state and also persists the cart data in the browser's sessionStorage.

4. **Components:**
   - `Navbar` component is imported and rendered to provide navigation links.
   - `Jewelleryshop`, `Apparel`, `HomeAndGarden`, `Cart`, and `Checkout` components are imported and rendered based on the current route.

**Routes:**
- `/JewelleryShop`: Renders the `Jewelleryshop` component.
- `/Cart`: Renders the `Cart` component, displaying the user's shopping cart.
- `/Apparel`: Renders the `Apparel` component for shopping apparel products.
- `/HomeAndGarden`: Renders the `HomeAndGarden` component for home and garden products.
- `/checkout`: Renders the `Checkout` component for processing orders.

**Notes:**
- This application uses React Router for client-side navigation.
- It maintains the shopping cart's state and handles cart updates.
- The cart data is stored in sessionStorage for persistence.

This `App.js` file serves as the main configuration and routing hub for the entire React application, orchestrating the display of different components based on user navigation.

# Navbar.js

**Overview:**
The `Navbar.js` file defines the navigation bar component (`Navbar`) for the React application. It provides links to different sections of the e-commerce website and displays the user's name if available.

**Functionality:**

1. **State Management:**
   - The `useState` hook is used to manage the `activeuser` state, which represents the currently logged-in user.
   - An initial state of `null` is set for `activeuser`.

2. **User Information:**
   - The `useEffect` hook makes an HTTP GET request to `/users` (assumed to be an API endpoint) to retrieve user data. It expects an array of user objects.
   - It then uses `find` to locate the user with `id` equal to 1 (assuming it's the logged-in user) and sets the `activeuser` state with the user's data.

3. **User Content:**
   - The `userContent` variable conditionally renders user information if `activeuser` is available. It displays a welcome message with the user's first and last names.

4. **Navigation Bar:**
   - The navigation bar is created using an HTML `<nav>` element with the class `Navbar`.
   - The navigation links (`Link`) from the `react-router-dom` library are used to navigate to different sections of the website.
   - The links include "Jewellery," "Apparel," "Home And Garden," and a shopping cart icon.
   - The shopping cart icon is rendered using the `ShoppingCart` component from the `phosphor-react` library.
   - The `userContent` (user information) is displayed next to the navigation links if available.

**Routes:**
- `/Jewelleryshop`: Navigates to the Jewellery shop section.
- `/Apparel`: Navigates to the Apparel section.
- `/HomeAndGarden`: Navigates to the Home And Garden section.
- `/Cart`: Navigates to the shopping cart section.

**Notes:**
- The `Navbar` component provides a consistent navigation structure for the website.
- It retrieves user information and displays a welcome message if a user is logged in.
- Navigation links allow users to explore different sections of the e-commerce site seamlessly.

This `Navbar.js` file plays a crucial role in enhancing user experience by providing navigation and personalized information for logged-in users.

# Jewelleryshop.js

**Overview:**
The `Jewelleryshop.js` file defines the component (`Jewelleryshop`) responsible for displaying and handling the products in the "Jewellery" category on the e-commerce website.

**Functionality:**

1. **State Management:**
   - The `useState` hook is used to manage the `jewelleryProducts` state, which stores an array of jewellery products.
   - An initial empty array is set as the default state for `jewelleryProducts`.

2. **Fetching Data:**
   - The `useEffect` hook is used to make an HTTP GET request to the `/products` endpoint (assumed to be an API endpoint).
   - The response data is filtered to include only products with the category "jewellery," and the filtered data is set in the `jewelleryProducts` state.

3. **Add to Cart:**
   - The `addToCart` function allows users to add products to their cart. It takes a `product` as a parameter.
   - It logs the action to the console and updates the cart by creating a new array (`updatedCart`) with the existing cart items and the selected product. The updated cart is then passed to the `updateCart` function.

4. **Displaying Products:**
   - The component maps through the `jewelleryProducts` array and renders product information for each item.
   - Displayed product information includes the product title, category, vendor, tags, inventory, price, and an image.
   - An "Add to Cart" button is provided for each product to allow users to add the item to their cart.

**CSS Styling:**
- The component applies CSS styles defined in the associated "Jewellery.css" file to ensure proper visual presentation.

**Notes:**
- The `Jewelleryshop` component focuses on displaying and managing products in the "Jewellery" category.
- It provides a straightforward user interface for viewing product details and adding them to the cart.
- The component's structure allows for easy extension and customization when adding more features or styles.

This component plays a crucial role in the e-commerce website, helping users browse and purchase jewellery products conveniently.

# HomeAndGarden.js

**Overview:**
The `HomeAndGarden.js` file defines the component (`HomeAndGarden`) responsible for displaying and handling the products in the "Home and Garden" category on the e-commerce website.

**Functionality:**

1. **State Management:**
   - The `useState` hook is used to manage the `homeandgardenProducts` state, which stores an array of home and garden products.
   - An initial empty array is set as the default state for `homeandgardenProducts`.

2. **Fetching Data:**
   - The `useEffect` hook is used to make an HTTP GET request to the `/products` endpoint (assumed to be an API endpoint).
   - The response data is filtered to include only products with the category "home-and-garden," and the filtered data is set in the `homeandgardenProducts` state.

3. **Add to Cart:**
   - The `addToCart` function allows users to add products to their cart. It takes a `product` as a parameter.
   - It logs the action to the console and updates the cart by creating a new array (`updatedCart`) with the existing cart items and the selected product. The updated cart is then passed to the `updateCart` function.

4. **Displaying Products:**
   - The component maps through the `homeandgardenProducts` array and renders product information for each item.
   - Displayed product information includes the product title, description, category, vendor, tags, inventory, price, and an image.
   - An "Add to Cart" button is provided for each product to allow users to add the item to their cart.

**CSS Styling:**
- The component applies CSS styles defined in the associated "HomeandGarden.css" file to ensure proper visual presentation.

**Notes:**
- The `HomeAndGarden` component focuses on displaying and managing products in the "Home and Garden" category.
- It provides a straightforward user interface for viewing product details and adding them to the cart.
- The component's structure allows for easy extension and customization when adding more features or styles.

This component plays a crucial role in the e-commerce website, helping users browse and purchase home and garden products conveniently.

# Checkout.js

**Overview:**
The `Checkout.js` file defines the component (`Checkout`) responsible for handling the checkout process in the e-commerce website. It allows users to review their selected items, place an order, and receive a confirmation message.

**Functionality:**

1. **State Management:**
   - The `useState` hook is used to manage the `confirmation` state, which determines whether the checkout process has been confirmed.

2. **Handle Checkout:**
   - The `handleCheckout` function is invoked when the "Checkout" button is clicked.
   - It constructs an `order` object containing the user's order details, such as `id`, `user_id`, `order_date`, `order_status`, `order_total`, and `order_items`.
   - The `order_items` array is constructed by mapping through `cartItems` to create an object for each item with `product_id`, `quantity` (set to 1), and `price`.
   - An HTTP POST request is made to the `/orders` endpoint (assumed to be an API endpoint) with the order object as the request body.
   - If the request is successful, the cart is updated by setting it to an empty array (`[]`), and the `confirmation` state is set to `true`.
   - If an error occurs during the request, an error message is logged to the console.

3. **Display Content:**
   - The component conditionally renders content based on the `confirmation` state.
   - If `confirmation` is `true`, a confirmation message is displayed.
   - If `confirmation` is `false`, the user's cart items are displayed along with a "Checkout" button.

**CSS Styling:**
- The component applies CSS styles defined in the associated "checkout.css" file to ensure proper visual presentation.

**Notes:**
- The `Checkout` component plays a crucial role in the e-commerce website, allowing users to complete their purchase.
- It provides a straightforward user interface for reviewing items and initiating the checkout process.
- The component's structure allows for easy extension and customization when adding more features or styles.

This component enhances the user experience by providing a clear and intuitive way to proceed with the purchase of selected items on the website.

# Cart.js

**Overview:**
The `Cart.js` file defines the component (`Cart`) responsible for displaying the user's shopping cart. It allows users to view and manage items in their cart, proceed to checkout, and displays the total price of the items.

**Functionality:**

1. **Display Cart Items:**
   - The component receives the `cartItems` and `updateCart` as props.
   - It displays a list of items in the user's cart, including the item's title, image, price, and a "Remove" button for each item.
   - The list of cart items is generated using the `map` function, and each item is wrapped in a `div` with a unique `key`.

2. **Remove Items:**
   - The "Remove" button allows users to remove an item from the cart.
   - When the "Remove" button is clicked, the `handleRemove` function is called, which filters the `cartItems` array to exclude the item with the specified `productId`.
   - The updated cart without the removed item is then passed to the `updateCart` function to update the state.

3. **Proceed to Checkout:**
   - A "Checkout" button is provided, which is wrapped in a `Link` component from 'react-router-dom.'
   - When clicked, the user is directed to the '/checkout' route, where they can complete the checkout process.

4. **Total Price:**
   - The component calculates the total price of the items in the cart using the `reduce` function.
   - The total price is displayed at the bottom of the cart.

5. **Empty Cart Message:**
   - If the cart is empty (i.e., `cartItems` is `null` or has a length of 0), a message is displayed informing the user that their cart is empty.

**CSS Styling:**
- The component applies CSS styles defined in the associated "Cart.css" file to ensure proper visual presentation.

**Notes:**
- The `Cart` component is an essential part of the e-commerce website, allowing users to manage their shopping cart.
- It provides a clear and user-friendly interface for reviewing and modifying cart items.
- The "Checkout" button seamlessly integrates with the routing system, making it easy for users to proceed to the checkout process.
- The total price feature helps users keep track of their expenses while shopping.

This component enhances the overall shopping experience on the website by providing an organized and visually appealing shopping cart view.
# Apparel.js

**Overview:**
The `Apparel.js` file defines the component (`Apparel`) responsible for displaying a list of apparel products available for purchase. Users can view product details, add items to their shopping cart, and see whether items are in stock.

**Functionality:**

1. **Display Apparel Products:**
   - The component receives the `cart` and `updateCart` functions as props.
   - It makes an HTTP GET request to the '/products' endpoint using Axios to fetch a list of products.
   - The products are filtered to include only those with the category 'apparel' using the `filter` function.
   - The retrieved apparel products are stored in the `apparelProducts` state using the `setApparelProducts` function.

2. **Add to Cart:**
   - Each product displayed in the list has an "Add to Cart" button.
   - When a user clicks the "Add to Cart" button, the `addToCart` function is called.
   - This function adds the selected product to the shopping cart (`cart`) by creating an updated cart array.
   - The `updateCart` function is called to update the cart's state with the new array, ensuring that the cart is concurrently updated.

3. **Product Details:**
   - For each apparel product, details such as title, description, category, vendor, tags, inventory, price, and an image are displayed.
   - The information is organized using HTML elements like headings (`<h2>`), paragraphs (`<p>`), and an image (`<img>`).

**CSS Styling:**
- The component applies CSS styles defined in the associated "Apparel.css" file to ensure proper visual presentation.

**Notes:**
- The `Apparel` component plays a crucial role in presenting and managing apparel products in the e-commerce website.
- It provides a user-friendly interface for users to browse through apparel items, view product details, and conveniently add items to their shopping cart.
- The dynamic filtering of products based on their category ensures that only relevant apparel products are displayed.
- Users can easily determine whether a product is in stock by checking the inventory information.
- The component contributes to a seamless and enjoyable shopping experience for users looking for apparel items.

This component is an integral part of the website's product catalog, catering specifically to users interested in purchasing apparel.

# server.js

**Overview:**
The `server.js` file defines a Node.js server using the Express.js framework. This server serves as the backend for an e-commerce website, handling various HTTP requests related to products, users, and orders.

**Functionality:**

1. **Dependencies:**
   - The server requires several dependencies, including `express`, `fs` (File System), `path`, `cors` (Cross-Origin Resource Sharing), and the `sampledata.json` file. These dependencies are imported at the beginning of the file.

2. **Express Setup:**
   - An Express app is created using `express()`, and the app instance is stored in the `app` variable.

3. **Middleware:**
   - Middleware functions are added to the Express app:
     - `cors`: Enables Cross-Origin Resource Sharing, allowing the server to respond to requests from different origins.
     - `express.json()`: Parses incoming JSON data in request bodies.

4. **Static File Serving:**
   - The Express app serves static files from the "build" directory. This is typically used for serving frontend assets (HTML, CSS, JavaScript) when deploying a React app.

5. **GET Endpoint - /products:**
   - When a GET request is made to the '/products' endpoint, the server responds with a JSON object containing product data. This data is read from the `sampledata.json` file, specifically the `products` property.

6. **GET Endpoint - /users:**
   - When a GET request is made to the '/users' endpoint, the server responds with a JSON object containing user data. This data is read from the `sampledata.json` file, specifically the `users` property.

7. **POST Endpoint - /orders:**
   - When a POST request is made to the '/orders' endpoint, the server expects an order object in the request body.
   - The server generates a random order ID and assigns it to the order object.
   - The order object is added to the `orders` property in the `sampledata.json` file.
   - The server responds with the created order object.

8. **Server Initialization:**
   - The server listens on a specified port (either from the environment variable `PORT` or the default port 3001).
   - A message is logged to indicate that the server is running and listening on the chosen port.

**Notes:**
- The server primarily serves as an API for the e-commerce website, providing product and user data, as well as handling order submissions.
- It utilizes the Express.js framework for routing and middleware.
- Cross-Origin Resource Sharing (CORS) is enabled to allow the frontend to make requests to this server from different origins, which is common when the frontend and backend are deployed separately.
- The random order ID generation is a simple example and may not be suitable for a production environment.
- The `sampledata.json` file appears to serve as the backend's data store, containing information about products, users, and orders.

This server.js file is a key component in the overall architecture of the e-commerce application, ensuring that data can be retrieved and orders can be processed through HTTP endpoints.


Completed Goals - Current
---------------------
* Apparel.js
* Jewelleryshop.js
* HomeAndGarden.js
* Navbar.js
* Navbar.css
* App.js
* Image display
* Cart
* Css
