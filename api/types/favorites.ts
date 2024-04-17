import { MediaType } from './api-contracts'

export type Favorite = {
  id: string
  mediaType: MediaType
  name: string
  thumb: string
}
