import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const TvPage = () => {
  const { id } = useLocalSearchParams()

  return (
    <View>
      <Text>TvPage - {id}</Text>
    </View>
  )
}

export default TvPage
