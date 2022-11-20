import Link from 'next/link'
import styled from 'styled-components'

export const Main = styled.section`
  background: #19803f;
  width: 100%;
  height: 200px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  gap: 1rem;
  font-size: 24px;
  padding-left: 15px;
`

export const NavLink = styled(Link)`
  border-radius: 8px;
  background-color: #D1D1D1;
  padding: 1rem 2rem;
`