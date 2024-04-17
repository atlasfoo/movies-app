import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const MoviePage = () => {
  const { id } = useLocalSearchParams()

  return (
    <View>
      <Text>MoviePage - {id}</Text>
    </View>
  )
}

export default MoviePage
