/*****
 * install jsonwebtoken
 * const token = jwt.sign(user,'secret', {expiresIn:'1h'})
 * token client
 * 
 * 
 * 
*/



/**
 * how to store token in the client side 
 * 1. memory -->> oky type
 * 2. localStorage --> ok type (xss)
 * 3. cookies :  http only
 */


/***
 * 1. set cookies : http only . for development secure : false
 * 
 * 2. cors
 * app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}));
 * 
 * 
 * 3 . client side axios setting
 * 4. in axios set in withCredentials : true\
 * 5. use cookie parser as middle ware a set 
 * 
 */