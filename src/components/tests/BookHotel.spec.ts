import { placeServiceInstance } from 'src/services'
import type { Places } from 'src/services/interfaces/Place'
import { describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { mockPlace } from '../mocks/place'


describe('fetchPlaces', () => {
  const placeOptions = ref<Array<Places>>([])


  it('test_fetchPlaces_successful_fetch', async () => {

    vi.spyOn(placeServiceInstance, 'getPlaces').mockResolvedValue(mockPlace)

    await fetchPlaces()

    expect(placeOptions.value).toEqual(mockPlace)
  })

  it('test_fetchPlaces_error_handling', async () => {
    vi.spyOn(placeServiceInstance, 'getPlaces').mockRejectedValue(new Error('API Error'))

    await expect(fetchPlaces()).resolves.not.toThrow()
  })

  it('test_fetchPlaces_empty_data_handling', async () => {
    const initialData: Places[] = []
    placeOptions.value = initialData
    vi.spyOn(placeServiceInstance, 'getPlaces').mockResolvedValue([])

    await fetchPlaces()

    expect(placeOptions.value).toEqual(initialData)
  })
})
