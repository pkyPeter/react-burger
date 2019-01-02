import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
const Burger = props => {
	// Get the object keys and transform into the array, use reduce to get []
	// while no ingredient exist
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((_, i) => {
				return <BurgerIngredients key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);
	if (!transformedIngredients.length) {
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}
	return (
		<div className={classes.Burger}>
			<BurgerIngredients type="bread-top" />
			{transformedIngredients}
			<BurgerIngredients type="bread-bottom" />
		</div>
	);
};

export default Burger;
