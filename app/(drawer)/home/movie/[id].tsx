import { useLocalSearchParams } from 'expo-router'

import { MediaType } from '~/api/types/api-contracts'
import DetailsPage from '~/components/DetailsPage'

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  return <DetailsPage id={id} mediaType={MediaType.Movie} />
}
export default Page
