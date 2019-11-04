import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
//step 4
import { ProductContext } from '../src/contexts/ProductContext';
//step 5
import { CartContext } from '../src/contexts/CartContext';

function App() {
	//notice there are two states (products availabe and cart for keepin track of shopper items)
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart step 1
		setCart([...cart, item])
	};

	//notice 3 components used 
	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={cart}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/" component={Products} />
					{/* <Route
						exact
						path="/"
						render={() => (
							<Products
								products={products}
								addItem={addItem}
							/>
						)}
					/> */}

					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
