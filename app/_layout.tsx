import { useFonts } from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { TamaguiProvider, Theme } from 'tamagui'

import config from '../tamagui.config'

export default function Layout() {
  // #region fonts
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/ttf/Montserrat-Regular.ttf'),
    MontserratBold: require('../assets/fonts/ttf/Montserrat-Bold.ttf'),
    MontserratItalic: require('../assets/fonts/ttf/Montserrat-Italic.ttf'),
    MontserratBoldItalic: require('../assets/fonts/ttf/Montserrat-SemiBold.ttf'),
    MontserratBlack: require('../assets/fonts/ttf/Montserrat-Black.ttf'),
    MontserratBlackItalic: require('../assets/fonts/ttf/Montserrat-BlackItalic.ttf'),
    MontserratLight: require('../assets/fonts/ttf/Montserrat-Light.ttf'),
    MontserratLightItalic: require('../assets/fonts/ttf/Montserrat-LightItalic.ttf'),
    MontserratSemiBold: require('../assets/fonts/ttf/Montserrat-SemiBold.ttf'),
    MontserratSemiBoldItalic: require('../assets/fonts/ttf/Montserrat-SemiBoldItalic.ttf'),
    MontserratThin: require('../assets/fonts/ttf/Montserrat-Thin.ttf'),
    MontserratThinItalic: require('../assets/fonts/ttf/Montserrat-ThinItalic.ttf'),
    MontserratExtraBold: require('../assets/fonts/ttf/Montserrat-ExtraBold.ttf'),
    MontserratExtraBoldItalic: require('../assets/fonts/ttf/Montserrat-ExtraBoldItalic.ttf'),
    MontserratExtraLight: require('../assets/fonts/ttf/Montserrat-ExtraLight.ttf'),
    MontserratExtraLightItalic: require('../assets/fonts/ttf/Montserrat-ExtraLightItalic.ttf'),
    MontserratMedium: require('../assets/fonts/ttf/Montserrat-Medium.ttf'),
    MontserratMediumItalic: require('../assets/fonts/ttf/Montserrat-MediumItalic.ttf'),
  })

  // #endregion

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return (
    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Theme name="blue">
          <Slot />
        </Theme>
      </GestureHandlerRootView>
    </TamaguiProvider>
  )
}
