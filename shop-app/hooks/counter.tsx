import { createContext, useState } from "react"

export const CounterContext = createContext({
  counter: 0,
  add: () => {},
  minus: () => {},
})

const CounterProvider = ({ children }: any) => {
  const [counter, setCounter] = useState(0)

  const add = () => setCounter(counter + 1)

  const minus = () => setCounter(counter - 1)

  return (
    <CounterContext.Provider value={{
      counter,
      add,
      minus,
    }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider