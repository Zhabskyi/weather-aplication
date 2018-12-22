import React from 'react';
import './NavMenu.css';


class NavMenu extends React.Component {

	render() {
		const listItems = [];

		React.Children.forEach(this.props.children, (child, i) => {
			const link = React.cloneElement(child, {
				key: i,
				className: 'nav-bar__link'
		});
			listItems.push(<li className="nav-bar__list__item" key={link.key+100}>
				{ link }
			</li>);
	});

		return (<div className='page-head'>
			<header className='header'>
				<nav className='nav-bar'>
					<div className='nav-bar__company'>
						Our company name
					</div>
					<div className='nav-bar__spacer'></div>
					<ul className='nav-bar__list'>
						{listItems}
					</ul>
				</nav>
			</header>
		</div>)
	}
}

export default NavMenu;