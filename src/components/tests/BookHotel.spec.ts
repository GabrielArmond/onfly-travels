import { describe, expect, test, vi } from "vitest";
import BookHotel from "src/components/BookHotel.vue";
import { render, screen, waitFor } from "@testing-library/vue";
import type axios from 'axios'
import { mockPlace } from "./mocks/place";

describe('Book hotel component', async () => {
  render(BookHotel)

  const mocks = vi.hoisted(() => ({
    get: vi.fn(),
  }));

  vi.mock('axios', async (importActual) => {
    const actual = await importActual<typeof axios>();

    const mockAxios = {
      default: {
        ...actual.defaults,
        create: vi.fn(() => ({
          ...actual.create(),
          get: mocks.get.mockResolvedValue({
            data: [
              {
                "name": "Belo Horizonte",
                "state": {
                  "name": "Minas Gerais",
                  "shortname": "MG"
                },
                "placeId": 1
              },
              {
                "name": "Fortaleza",
                "state": {
                  "name": "Ceará",
                  "shortname": "CE"
                },
                "placeId": 2
              },
              {
                "name": "Porto Seguro",
                "state": {
                  "name": "Bahia",
                  "shortname": "BA"
                },
                "placeId": 3
              },
              {
                "name": "Rio de Janeiro",
                "state": {
                  "name": "Rio de Janeiro",
                  "shortname": "RJ"
                },
                "placeId": 4
              },
              {
                "name": "São Paulo",
                "state": {
                  "name": "São Paulo",
                  "shortname": "SP"
                },
                "placeId": 5
              }
            ],
          }),
        })),
      },
    };

    return mockAxios;
  });

  await waitFor(() => {
    test('Book hotel component should render correctly', () => {
      const bookHotel = screen.getByTestId('book-hotel')
      expect(bookHotel).toBeDefined()
    })

    test('Book hotel component should called get places', async () => {
      await mocks.get()
      expect(mocks.get).toHaveBeenCalled()
    })

    test('Book hotel component should render places', async () => {
      const response = await mocks.get()
      expect(mockPlace).toEqual(response.data)
    })
  })
})
