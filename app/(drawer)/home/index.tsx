import { View, Text } from 'react-native'
import { Card } from 'tamagui'

import { Title } from '~/tamagui.config'

const DrawerHome = () => {
  return (
    <View>
      <Title>Home</Title>
      <Card>
        <Card.Header>
          <Text>Header</Text>
        </Card.Header>
        <Card.Footer />
        <Card.Background />
      </Card>
    </View>
  )
}

export default DrawerHome
