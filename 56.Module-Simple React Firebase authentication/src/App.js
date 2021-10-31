import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useState } from "react";
import './App.css';
import initializeAutho from './Firebase/Firebase.initialize';

initializeAutho();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


function App() {
  const [user, setUser] = useState({})
  const auth = getAuth();
  const handleGoogleSignIN = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedINUser = {
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(loggedINUser);
      })
      .catch((error) => {
        console.log(error.message)
      });
  }
  const handleGithubSignIN = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedINUser = {
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(loggedINUser);
      })
      .catch((error) => {
        console.log(error.message)
      });
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
  }
  return (
    <div className="App">
      {!user.name ?
        <div>
          <button onClick={handleGoogleSignIN}>Google Sign In</button><br />
          <button onClick={handleGithubSignIN}>GitHub SignIn</button>
        </div> :
        <button onClick={handleSignOut}>Sign Out</button>
      }
      {
        user.name && <div>
          <h2>Welcome {user.name}</h2>
          <p>I Know Your Email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
