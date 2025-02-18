import { api } from 'src/boot/axios';
import type { Hotel, Hotels } from "./interfaces/Hotels";
import { mapperHotelAmenities } from 'src/utils/mapper';

export interface HotelsParams {
  page: number;
  pageSize: number;
  orderBy: 'best-rated' | 'recommended'
  placeId: number | null
}

interface HotelsPaginated {
  data: Hotel[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export default class HotelService {
  async getHotels(params: HotelsParams): Promise<HotelsPaginated> {
    const response = await api.get<Hotels>('hotel.json')

    const hotelsData = mapperHotelAmenities(response.data)

    const filteredHotels = params.placeId
      ? hotelsData.filter(hotel => hotel.placeId === params.placeId)
      : hotelsData;

    const startIndex = (params.page - 1) * params.pageSize;
    const endIndex = startIndex + params.pageSize;

    let hotels = filteredHotels.flatMap(item => item.hotels)

    if (params.orderBy === 'recommended') {
      hotels = hotels.sort((a, b) => a.price - b.price);
    }

    if (params.orderBy === 'best-rated') {
      hotels = hotels.sort((a, b) => Number(b.stars) - Number(a.stars));
    }

    const paginatedHotels = hotels.slice(startIndex, endIndex);

    const totalHotels = hotels.length;
    return {
      data: paginatedHotels,
      total: totalHotels,
      page: params.page,
      pageSize: params.pageSize,
      totalPages: Math.ceil(totalHotels / params.pageSize)
    };
  }
}
