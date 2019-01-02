import React, { PropTypes } from "react";
import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo.js"
import NavigationItems from "../NavigationItems/NavigationItems.js";
import Backdrop from "../../UI/Backdrop/Backdrop.js";

const SideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open]
	}
	return (
		<React.Fragment>
			<Backdrop show={props.open} clicked={props.closed}/>
			<div className={attachedClasses.join(" ")}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</React.Fragment>
	)
}

export default SideDrawer;