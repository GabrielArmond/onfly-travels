import { describe, expect, test } from "vitest";
import HotelCard from 'src/components/Hotels/Card.vue'
import { render, screen, waitFor } from '@testing-library/vue'

describe('Card hotel component', async () => {
  render(HotelCard, {
    props: {
      hotel: {
        name: 'Hotel Test',
        price: 350,
        address: {
          city: 'City Test',
          country: 'Country Test',
          street: 'Street Test',
          district: 'District Test',
          fullAddress: 'Street Test, District Test, City Test, Country Test',
          number: '123',
          state: 'State Test',
          zipCode: null
        },
        images: [
          "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/01487683547.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/11487683548.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/21487683548.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/31487683549.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/41487683549.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/51487683550.jpg",
          "https://s3.amazonaws.com/e-htl/uploads/hotels/logotipos/27554.jpg"
        ],
        amenities: [],
        deals: null,
        description: 'Description Test',
        id: 123,
        favorite: false,
        hasAgreement: false,
        hasBreakFast: true,
        hasRefundableRoom: false,
        nonRefundable: false,
        roomsQuantity: 2,
        stars: 3,
        thumb: "https://s3.amazonaws.com/e-htl/uploads/hotels/27554/51487683550.jpg"
      }
    }
  })

  await waitFor(() => {
    test('Card hotel component should render correctly', () => {
      const hotelCard = screen.getByTestId('hotel-card')
      expect(hotelCard).toBeDefined()
    })

    test('Card hotel component should render hotel name', () => {
      const hotelName = screen.getByText('Hotel Test')
      expect(hotelName).toBeDefined()
    })

    test('Card hotel component should render hotel price', () => {
      const hotelCard = screen.getByTestId('hotel-card')
      const priceElement = hotelCard.getElementsByClassName('price-night')[0]
      const hotelPrice = priceElement ? priceElement.textContent : null
      expect(hotelPrice).toBe('R$ 350,00/noite')
    })

    test('Card hotel component should render hotel total price', () => {
      const hotelCard = screen.getByTestId('hotel-card')
      const priceElement = hotelCard.getElementsByClassName('price-value')[0]
      const hotelPrice = priceElement ? priceElement.textContent : null
      expect(hotelPrice).toBe('R$ 1.050,00')
    })
  })
})
