export type FilterType = {
  id: string
  name: string
  checked?: boolean
}

export type SegmentType = {
  origin: string
  destination: string
  date: string
  stops: string[]
  duration: number
}

export type TicketType = {
  price: number
  carrier: string
  segments: SegmentType[]
}
