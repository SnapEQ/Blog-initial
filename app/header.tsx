export default function Header() {
	const buttons: string[] = ["Home", "Blog", "Projects", "Contact"];

	const buttonElements = buttons.map((btn: string) => (
		<button 
		key={btn} 
		className='navbar-button'
		>
			{btn}
		</button>
	));

	return (
		<>
			<div className='header'>
				<div className='top-banner'>Hello</div>
				<div className='navbar'>
					<div className='logo'>
						{/*  insert image here */}
						<p>SnapEQ</p>
					</div>
					<div className='buttons-container'>
						{buttonElements}
					</div>
				</div>
			</div>
		</>
	);
}
