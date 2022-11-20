import dynamic from 'next/dynamic'

const Header = dynamic(() => import('shop/header'))

export default function Home() {
  return (
    <div>
      <Header />
      <section style={{
        backgroundColor: '#c76e0e',
        padding: '1rem',
      }}>
      <h1>Main Header</h1>
      </section>
    </div>
  )
}
