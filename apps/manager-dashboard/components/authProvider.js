import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const authProvider = {
  login: () => Promise.resolve(), // Always resolve login
  logout: () => Promise.resolve(), // Always resolve logout
  checkAuth: () => Promise.resolve(), // Always resolve checkAuth
  checkError: () => Promise.resolve(), // Always resolve checkError
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
