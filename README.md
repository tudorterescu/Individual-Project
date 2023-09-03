

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
