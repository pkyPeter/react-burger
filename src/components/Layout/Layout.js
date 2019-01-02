import React from "react";
import classes from "./layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
	state = {
		showSideDrawer: false
	};
	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};
	sideDrawerToggleHandler = () => {
		this.setState( prevState => (
			{showSideDrawer: !prevState.showSideDrawer}
		))
	}
	render() {
		return (
			<React.Fragment>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<div>ToolBar, SideDrawer, Backdrop</div>
				<main className={classes.Content}>{this.props.children}</main>
			</React.Fragment>
		);
	}
}

export default Layout;
