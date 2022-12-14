import Counter from '../components/Counter'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Counter />
    </div>
  )
}
