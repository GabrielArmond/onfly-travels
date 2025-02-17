import { placeServiceInstance } from 'src/services'
import type { Places } from 'src/services/interfaces/Place'
import { describe, it, expect, vi, beforeAll } from 'vitest'
import { ref } from 'vue'
import { mockPlace } from '../mocks/place'
import BookHotel from '../BookHotel.vue'
import { render, screen } from '@testing-library/vue'
import axios from 'axios'

describe('book hotel component', () => {
  vi.mock('axios')

  let bookHotel: HTMLElement
  const placeOptions = ref<Array<Places>>([])
  const errorMessage = ref('');

  async function fetchPlaces() {
    try {
      const response = await axios.get('/api/places');
      return response.data;
    } catch (error) {
      errorMessage.value = 'Ocorreu um erro ao acessar o sistema.', error;
    }
  }

  beforeAll(() => {
    render(BookHotel)

    bookHotel = screen.getByTestId('testId')

  })

  it('book_hotel_has_rendered', () => {
    const reserveHotelElement = bookHotel.getElementsByClassName('reserve-hotel')[0];
    expect('Reservar hotel').toBe(reserveHotelElement ? reserveHotelElement.textContent : null);
  })

  it('test_fetchPlaces_successful_fetch', async () => {
    vi.spyOn(placeServiceInstance, 'getPlaces').mockResolvedValue(mockPlace)
    await fetchPlaces()
    expect(placeOptions.value).toEqual(mockPlace)
  })

  it('test_fetchPlaces_error_handling', async () => {
    vi.spyOn(placeServiceInstance, 'getPlaces').mockRejectedValue(new Error('API Error'));

    await expect(fetchPlaces()).rejects.toThrow('API Error');
  })

  it('test_fetchPlaces_empty_data_handling', async () => {
    const initialData: Places[] = []
    placeOptions.value = initialData
    vi.spyOn(placeServiceInstance, 'getPlaces').mockResolvedValue([])

    await fetchPlaces()

    expect(placeOptions.value).toEqual(initialData)
  })
})
