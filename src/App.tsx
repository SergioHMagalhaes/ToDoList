import styles from './App.module.scss'
import logo from './assets/logo.svg'
import { NewTask } from './components/NewTask'

function App() {
  return (
    <div>
		<header className={styles.header}>
			<img src={logo} alt="Logo ToDo" />
		</header>

		<div className={styles.container}>
			<NewTask />
		</div>
		
	</div>
  )
}

export default App
