import { api } from 'src/boot/axios';
import type { Hotels } from "./interfaces/Hotels";
import { mapperHotelAmenities } from 'src/utils/mapper';

export default class HotelService {
  async getHotels(): Promise<Hotels> {
    const response = await api.get('hotel.json')

    return mapperHotelAmenities(response.data)
  }
}
