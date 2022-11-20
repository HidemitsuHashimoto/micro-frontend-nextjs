import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const Header = dynamic(() => import('shop/header'))

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Main</h1>
    </div>
  )
}
