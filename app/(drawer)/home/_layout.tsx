import { DrawerToggleButton } from '@react-navigation/drawer'
import { Stack } from 'expo-router'
import { useTheme } from 'tamagui'

export const unstable_settings = {
  initialRouteName: 'index',
}

const FavoritesLayout = () => {
  const { blue7 } = useTheme()

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: blue7.val,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Moviestar',
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
        }}
      />
      <Stack.Screen name="movie/[id]" options={{ title: 'Back' }} />
      <Stack.Screen name="tv/[id]" options={{ title: 'Back' }} />
    </Stack>
  )
}

export default FavoritesLayout
