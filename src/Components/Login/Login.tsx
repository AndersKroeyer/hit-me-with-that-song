/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { auth, provider } from '../../Firebase/Firebase';
import { AppUser, AuthContext } from '../../Firebase/FirebaseAuthContext';
import { ReactComponent as GoogleIcon } from './google.svg';

const signIn = (setUser: (user: AppUser) => void) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
        const { user } = result;
        console.log('user', user);
        setUser({ user, extraProp: 'test' });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const { email } = error.customData;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log('Login failed', {
        errorCode,
        errorMessage,
        email,
        credential,
      });
    });
};

const styles = {
  container: css({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  googleIcon: css({
    height: '25px',
  }),
  buttonText: css({
    marginLeft: '10px',
    marginTop: '4px',
  }),
};

function Login() {
  const userContext = useContext(AuthContext);
  return (
    <div css={styles.container}>
      <Button onClick={() => signIn(userContext.update)} variant="outlined">
        <GoogleIcon css={styles.googleIcon} />
        <span css={styles.buttonText}>Login with google</span>
      </Button>
    </div>
  );
}
export default Login;
