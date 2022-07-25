import React, {useState, useContext} from 'react';
import { AccountContext } from '../components/Account';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Pool from '../UserPool';



export default () => 
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();
    
  // const { authenticate } = useContext(AccountContext);


  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          
          console.log('onSuccess:', data);
          resolve(data);
        },

        onFailure: err => {
          console.error('onFailure:', err);
          reject(err);
        },

        newPasswordRequired: data => {
          console.log('newPasswordRequired:', data);
          resolve(data);
        }
      });
    });


   const onSubmit = event => {
     event.preventDefault();
     authenticate(email, password)
     .then(data => {
       console.log('Logged in!', data);
       history.push("/searchbar")
      // return <Redirect to="searchbar"/>
     })
     .catch(err => {
       console.error('Failed to login!', err);
     })
    };

    return (
       <div>
       <form onSubmit={onSubmit}>
         <input
           value={email}
           onChange={event => setEmail(event.target.value)}
           placeholder = "Email address"
         />
 
         <input
           value={password}
           onChange={event => setPassword(event.target.value)}
           placeholder = "Password"
         />
 
         <button type='submit' >Login</button>
       </form>
     </div>

      
     );
 };









