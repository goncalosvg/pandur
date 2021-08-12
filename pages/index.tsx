import Navigation from '../components/Navigation/Navigation';
import Topics from '../components/Topics/Topics';

import styles from '../styles/pagestyles/index.module.css';

function Home() {
  return (
    <main>
      <Navigation />

      <div id={styles.hero}>
        <div className="wrapper">

          <h1>Have a question?<br />We have the <span className="gradient-text">answer</span></h1>

        </div>
        <Topics />
      </div>

    </main>
  )
}

export default Home;