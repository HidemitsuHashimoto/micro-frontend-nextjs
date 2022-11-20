import styled from 'styled-components'

export const Main = styled.section``

type ButtonProps = {
  contextType: 'plus' | 'minus'
}
export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 8px;
  background-color: ${({ contextType }) => contextType === 'plus' ? 'blue' : 'red'};
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ contextType }) => contextType === 'plus' ? 'rgba(21, 0, 252, 0.5)' : 'rgba(255, 0, 8, 0.5)'};
  }
`