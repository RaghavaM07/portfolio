import './Hero.css'

const Hero = () => {
	return (
		<main id='home'>
		{/* Nav */}
		<div className='nav-div'>
			<ul className='nav-list'>
				<li><a href='#home' className='hover-underline-animation'>Home</a></li>
				<li><a href='#about' className='hover-underline-animation'>About</a></li>
				<li><a href='#skills' className='hover-underline-animation'>Skills</a></li>
				<li><a href='#projects' className='hover-underline-animation'>Projects</a></li>
				<li><a href='#contact' className='hover-underline-animation'>Contact</a></li>
			</ul>
		</div>
		{/* Main Hero */}
		<div className='main-hero'>
			<div className='hero-div left-hero'>
				<p>Hi, I&apos;m</p>
				<h1>RAGHAVA</h1>
				<h1>MURUGUDU</h1>
			</div>
			<div className='hero-div right-hero'>
				<h1 className='gradient-animation'>R</h1>
			</div>
		</div>
		</main>
	)
}
export default Hero
