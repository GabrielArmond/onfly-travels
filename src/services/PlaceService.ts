import { api } from 'src/boot/axios';
import type { Places } from './interfaces/Place';


export default class PlaceService {
  async getPlaces(): Promise<Array<Places>> {
    const response = await api.get('/db/place.json')

    return response.data
  }
}
