import { Ionicons } from '@expo/vector-icons'
import { colorTokens } from '@tamagui/themes'
import Drawer from 'expo-router/drawer'

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
        drawerActiveTintColor: colorTokens.dark.gray.gray12,
      }}>
      <Drawer.Screen
        name="home"
        options={{
          title: 'Moviesapp',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="favorites"
        options={{
          title: 'My Favorites',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />,
        }}
      />
    </Drawer>
  )
}
