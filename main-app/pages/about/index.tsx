import dynamic from "next/dynamic"

const ShopAbout = dynamic(() => import('shop/about'), { ssr: false })

const About = () => {
  return (
    <main>
      <section style={{
      backgroundColor: '#c76e0e',
      padding: '1rem',
    }}>
        <h1>I am the Main About page section!</h1>
        <p>Below is the Shop About page!</p>
      </section>
      <ShopAbout />
    </main>
  )
}

export default About