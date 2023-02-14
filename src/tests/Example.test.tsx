import { render, screen } from '@testing-library/react'
import { exampleCalc } from './Example'
import { ExampleComponent } from './ExampleComponent'

describe('ExampleTest', () => {
  it('case 1', () => {
    expect(exampleCalc(1, 2)).toBe(3)
  })

  it('case 2', () => {
    render(<ExampleComponent />)
    expect(screen.getByText('Hello Test')).toBeInTheDocument()
  })
})
