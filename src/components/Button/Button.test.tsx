import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button component', () => {
  test('renders button with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  test('applies primary variant by default', () => {
    render(<Button>Test</Button>)
    const button = screen.getByText('Test')
    // проверяем, что класс содержит 'primary'
    expect(button.className).toMatch(/primary/)
  })

  test('handles onClick event', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    const button = screen.getByText('Click')
    await userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByText('Disabled')).toBeDisabled()
  })

  test('applies different variants correctly', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByText('Secondary')
    expect(button.className).toMatch(/secondary/)
  })

  test('applies different sizes correctly', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByText('Large')
    expect(button.className).toMatch(/lg/)
  })
})