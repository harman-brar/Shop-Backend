# Shop-Backend

Note: project soon to be refactored using json objects rather than query params for more advanced functionality

## Interaction
This backend is **no longer** being hosted at: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com

### Retrieving One Product:
* must replace (item_name) param with one of the existing items listed after creating a cart

Route [GET]: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com/products/one?name=(item_name)

_Route Response:_ https://github.com/harman-brar/Shop-Backend/blob/master/shop-backend-pics/one-prod_get.png

### Retrieving All Products:
Route [GET]: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com/products/   

_Route Response:_ https://github.com/harman-brar/Shop-Backend/blob/master/shop-backend-pics/all-prod_get.png 

### Retrieving Only Available Products:
Route [GET]: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com/products/?onlyNonZero=true

_Route Response:_ https://github.com/harman-brar/Shop-Backend/blob/master/shop-backend-pics/avail-prod_get.png

### Creating Cart:
Route [POST]: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com/cart/

_Route Response:_ https://github.com/harman-brar/Shop-Backend/blob/master/shop-backend-pics/create-cart_post.png

### Adding Product To Cart:
* must replace (item_name) param with one of the existing items listed after creating a cart

Route [POST]: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com/cart/addToCart?name=(item_name)

_Route Response:_ https://github.com/harman-brar/Shop-Backend/blob/master/shop-backend-pics/add-cart_post.png

* can add multiple products to cart by changing name param, as long as that item exists in the database

### See Cart:
Route [POST]: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com/cart/completeCart?action=see

_Route Response:_ https://github.com/harman-brar/Shop-Backend/blob/master/shop-backend-pics/see-cart_post.png

### Complete Cart:
* returns all products in cart with inventory_count reduced by 1 and the sum of 1x each item price

Route [POST]: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com/cart/completeCart?action=complete

_Route Response:_ https://github.com/harman-brar/Shop-Backend/blob/master/shop-backend-pics/complete-cart_post.png

## Running Locally

* Configured to run on port 8080

To install dependencies (required), run: 
```
npm install
```

To start the server:
```
npm start
```
### Files of interest are in the _routes_ folder

## Available Routes
- [GET] ..  /products/

- [GET] ..  /products/one?name=(item_name)

- [GET] ..  /products/?onlyNonZero=true

- [POST] .. /cart/

- [POST] .. /cart/addToCart?name=(item_name)

- [POST] .. /cart/completeCart?action=see

- [POST] .. /cart/completeCart?action=complete
