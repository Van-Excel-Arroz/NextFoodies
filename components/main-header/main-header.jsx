import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader(params) {
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					<Image src={logoImage} alt="Logo" priority />
					NextLevel Food
				</Link>

				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">Foodies Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
