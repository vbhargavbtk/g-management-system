import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const authProvider = {
  login: ({ username, password }) => {
    return signInWithEmailAndPassword(auth, username, password);
  },
  logout: () => signOut(auth),
  checkAuth: () => {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged(user => {
        if (user) {
          resolve();
        } else {
          reject();
        }
      });
    });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      signOut(auth);
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
