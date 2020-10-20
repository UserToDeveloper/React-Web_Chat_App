import jwtDecode from 'jwt-decode';

/********
 * Check if the user is authenticated
 */

 const isUserAuthenticated = () => {
     const user = getLoggedInUser();
     if(!user){
         return false;
     }

     try{
         const decoded = jwtDecode(user.token);
         const currentTime = Date.now() / 1000;
         if(decoded.exp < currentTime){
             console.warn('access token expired');
             return false;
         }
         else{
             return true;
         }

     }
     catch(e){
         console.error('access token expired');
         return false;

     }
 }


 /**
  * Sets the logged in user
  */
 
  const setLoggedInUser = (user) => {
      localStorage.setItem.setItem('auth.user', JSON.stringify(user));
  }

  /**
   * Returns the logged in user information
   */
  
   const getLoggedInUser = () => {
       const user = localStorage.getItem('auth.user');
       return user ? (typeof user === 'object' ? user : JSON.parse(user)) : null;
   }

   export {isUserAuthenticated, setLoggedInUser, getLoggedInUser};
   
