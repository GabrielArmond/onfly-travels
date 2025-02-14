import { api } from 'src/boot/axios';
import type { Hotels } from "./interfaces/Hotels";

export default class HotelService {
  async getHotels(): Promise<Hotels> {
    const response = await api.get('hotel.json')

    return response.data
  }
}
