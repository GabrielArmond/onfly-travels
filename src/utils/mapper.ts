import type { Hotels } from "src/services/interfaces/Hotels"

const icons: Record<string, string> = {
  WI_FI: 'wifi',
  BREAKFAST: 'breakfast_dining',
  PARKING: 'local_parking',
  RESTAURANT: 'restaurant',
  LAUDRY: 'local_laundry_service',
  FITNESS_CENTER: 'fitness_center',
  POOL: 'pool',
  AIR_CONDITIONING: 'air_purifier',
  SAFE: 'lock',
  PUB: 'local_bar',
  MEETING_ROOM: 'meeting_room',
  ROOM_SERVICE: 'room_service',
  PETS: 'pets',
  SPA: 'spa',
  TRANSFER: 'transfer_within_a_station',
  ROOM_TV: 'tv',
  RECEPTION_24_HOURS: 'concierge',
  MASSAGE: 'spa',
  STAGE: 'podium',
  STEAM_ROOM: 'hot_tub',
  PLAY_GROUND: 'ar_stickers',
  ACEPTED_CAR_CREDIT: 'credit_card'
}

export function mapperHotelAmenities(hotels: Array<Hotels>): Array<Hotels> {
  const hotelsMapped = hotels.map(item => {
    if (item.amenities) {
      return {
        ...item,
        amenities: item.amenities.map(a => {
          return {
            ...a,
            icon: icons[a.key] ?? 'bed'
          }
        })
      }
    }

    return { ...item }
  })

  return hotelsMapped
}
