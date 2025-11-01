import { Stack } from 'expo-router';
import { useAuthentication } from '../hooks/useAuthentication'; // We will create this hook later

export default function RootLayout() {
  const { isAuthenticated } = useAuthentication();

  return (
    <Stack>
      {
        isAuthenticated ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="login" options={{ headerShown: false }} />
        )
      }
      <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}