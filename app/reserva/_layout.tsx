import { Stack } from 'expo-router';

export default function ReservaLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pago" />
    </Stack>
  );
}