type HotelAmenities = {
  key: string,
  label: string,
  icon?: string
}

type HotelAdress = {
  street: string,
  number: string,
  district: string,
  city: string,
  state: string,
  country: string,
  zipCode: string | null,
  fullAddress: string
}

export interface Hotel {
  id: number,
  favorite: boolean,
  name: string,
  description: string,
  stars: number,
  thumb: string,
  amenities: Array<HotelAmenities>,
  hasBreakFast: boolean,
  hasRefundableRoom: boolean,
  hasAgreement: boolean,
  nonRefundable: boolean | null,
  address: HotelAdress,
  images: Array<string>,
  deals: string | null,
  roomsQuantity: number,
  price: number
}

export interface HotelWithPlace {
  hotels: Array<Hotel>,
  placeId: number | null
}

export type Hotels = Array<HotelWithPlace>
