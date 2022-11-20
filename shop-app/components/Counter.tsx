import { useContext } from "react"
import { CounterContext } from "../hooks/counter"
import CounterProvider from '../hooks/counter'
import * as S from './counterStyles'

const CounterComponent = () => {
  const { counter, add, minus } = useContext(CounterContext)

  return (
    <S.Main>
      <h1>I am the page with counter context!</h1>
      <h3>Counter: {counter}</h3>
      <S.Button contextType='plus' onClick={add}>Plus 1</S.Button>
      <S.Button contextType='minus' onClick={minus}>Minus 1</S.Button>
    </S.Main>
  )
}

const Counter = () => {
  return (
    <CounterProvider>
      <CounterComponent />
    </CounterProvider>
  )
}

export default Counter