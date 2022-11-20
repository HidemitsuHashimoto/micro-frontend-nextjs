import dynamic from 'next/dynamic'

const Header = dynamic(() => import('shop/header'))
const Counter = dynamic(() => import('shop/counter'))

export default function Home() {
  return (
    <div>
      <Header />
      <Counter />
      <section style={{
        backgroundColor: '#c76e0e',
        padding: '1rem',
      }}>
        <h1>Main Header</h1>
      </section>
    </div>
  )
}
