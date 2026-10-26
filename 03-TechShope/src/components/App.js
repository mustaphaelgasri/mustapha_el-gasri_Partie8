import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	return (
		<div style={{ padding: '20px' }}>
			<h1 style={{ textAlign: 'center', marginBottom: '30px' }}>TechShop </h1>
			<ShoppingList />
		</div>
	)
}

export default App