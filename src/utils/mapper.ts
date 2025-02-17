import type { Hotels } from "src/services/interfaces/Hotels"

const icons: Record<string, string> = {
  WI_FI: 'wifi',
  BREAKFAST: 'breakfast_dining',
  PARKING: 'local_parking',
  RESTAURANT: 'restaurant',
  LAUDRY: 'local_laundry_service',
  FITNESS_CENTER: 'fitness_center',
  POOL: 'pool',
  AIR_CONDITIONING: 'ac_unit',
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

export function mapperHotelAmenities(hotels: Hotels): Hotels {
  const hotelsMapped = hotels.map(item => {
    return {
      ...item,
      hotels: item.hotels.map(hotel => {
        return {
          ...hotel,
          amenities: hotel.amenities ? hotel.amenities.map(amenity => {
            return {
              ...amenity,
              icon: icons[amenity.key] ?? 'bed'
            }
          }) : []
        }
      })
    }
  })

  return hotelsMapped
}
