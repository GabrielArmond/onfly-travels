import { cleanup, render, screen, waitFor } from "@testing-library/vue";
import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import IndexPage from 'src/pages/IndexPage.vue'
import type axios from "axios";
import { createPinia, setActivePinia } from "pinia";
import { mockHotelsData } from "./mocks/indexPage";

describe('Index Page', async () => {
  beforeAll(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    cleanup()
  })



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
                hotels: [
                  {
                    "id": 398,
                    "favorite": false,
                    "name": "Nobile Inn Pampulha ",
                    "description": "O Hotel esta próximo a Lagoa da Pampulha,  fica ainda a 5 minutos do Estádio Mineirão e do Shopping Del Rey e a 7 km do centro de Belo Horizonte.",
                    "stars": "3",
                    "thumb": "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/01487683547.jpg",
                    "amenities": [
                      {
                        "key": "WI_FI",
                        "label": "Internet"
                      },
                      {
                        "key": "BREAKFAST",
                        "label": "Café da manhã"
                      },
                      {
                        "key": "PARKING",
                        "label": "Estacionamento"
                      },
                      {
                        "key": "LAUNDRY",
                        "label": "Lavanderia"
                      }
                    ],
                    "hasBreakFast": true,
                    "hasRefundableRoom": true,
                    "hasAgreement": false,
                    "nonRefundable": null,
                    "address": {
                      "street": "Avenida Professor Magalhaes Penido",
                      "number": "378",
                      "district": "Pampulha",
                      "city": "Belo Horizonte",
                      "state": "MG",
                      "country": "BR",
                      "zipCode": null,
                      "fullAddress": "Avenida Professor Magalhaes Penido, 378 - Pampulha"
                    },
                    "images": [
                      "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/01487683547.jpg",
                      "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/11487683548.jpg",
                      "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/21487683548.jpg",
                      "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/31487683549.jpg",
                      "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/41487683549.jpg",
                      "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/51487683550.jpg",
                      "https://s3.amazonaws.com/e-htl/uploads/hotels/logotipos/27554.jpg"
                    ],
                    "deals": null,
                    "roomsQuantity": 2,
                    "price": 100
                  }
                ],
                placeId: 1
              },
            ]

          }),
        })),
      },
    };

    return mockAxios;
  });

  await waitFor(() => {
    test('Index Page component should render correctly', () => {
      render(IndexPage)
      const indexPage = screen.getByTestId('index-page')
      expect(indexPage).toBeDefined()
    })

    test('Index Page should called get hotels data', async () => {
      await mocks.get()
      expect(mocks.get).toHaveBeenCalled()
    })

    test('Index Page should render hotels', async () => {
      const response = await mocks.get()
      expect(mockHotelsData).toEqual(response.data)
    })
  })
})
