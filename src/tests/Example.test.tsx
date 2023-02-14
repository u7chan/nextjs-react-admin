import { exampleCalc } from './Example'
// import { FC } from 'react'
// import { render, screen } from '@testing-library/react'

// const ExampleComponent: FC = () => <span>Hello Test</span>

describe('ExampleTest', () => {
  //
  it('case 1', () => {
    expect(exampleCalc(1, 2)).toBe(3)
    // render(<ExampleComponent />)
    // expect(screen.getByText('Hello Test')).toBeInTheDocument()
  })
})
