# Shop-Backend

## Interaction
This backend is being hosted: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com

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
Route [POST]: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com/cart/addToCart?name=Item Uno

_Route Response:_ https://github.com/harman-brar/Shop-Backend/blob/master/shop-backend-pics/add-cart_post.png

* can add multiple products to cart by changing name param, as long as that item exists in the database

### See Cart:
Route [POST]: http://shop-backend-shop-backend.1d35.starter-us-east-1.openshiftapps.com/cart/completeCart?action=see

_Route Response:_ https://github.com/harman-brar/Shop-Backend/blob/master/shop-backend-pics/see-cart_post.png

### Complete Cart:
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
## Available Routes
- [GET] ..  /products/

- [GET] ..  /products/?onlyNonZero=true

- [POST] .. /cart/

- [POST] .. /cart/addToCart?name=XXXXXXXX

- [POST] .. /cart/completeCart?action=see

- [POST] .. /cart/completeCart?action=complete
