import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Homepage from './Homepage'


describe('Homepage renders correctly', () => {
    test('change url once click on button', async () => {
        // ARRANGE
        render(<Homepage />)
      
        // ACT
        // await userEvent.click(screen.getByText("Let's shop!"))
      
        // ASSERT
        expect(screen.getByRole('h1')).toHaveTextContent('YOUR VIRTUAL CAR SHOP')
        // expect(screen.getByRole('button')).toBeDisabled()
      })
})
