export interface TrendingResponse {
  page: number
  results: Item[]
  total_pages: number
  total_results: number
}

export interface Item {
  backdrop_path: string
  id: number
  original_title?: string
  overview: string
  poster_path: string
  media_type: MediaType
  adult: boolean
  title?: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date?: Date
  video?: boolean
  vote_average: number
  vote_count: number
  original_name?: string
  name?: string
  first_air_date?: Date
  origin_country?: string[]
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}
