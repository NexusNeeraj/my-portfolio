import heroImg from '../../Assets/home.png';
import Type from './Type';

const Hero = () =>{
	return (
	<section
		id="hero"
		className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
		<div className="flex-1 flex flex-col justify-center items-center gap-5">
			<div className="text-center  text-5xl font-bold">
				<p className="text-center text-xl font-bold">
					Hi There! 👋🏻
				</p>
				<h1 className="text-center  text-5xl font-bold">
				I'M <strong className="text-amber-900"> NEERAJ</strong>
				</h1>
				<Type />
			</div>
		</div>
		<div className="flex-1">
		<img src={heroImg}
			alt="Hello.svg"
			className="w-full h-full bg-cover "/>
		</div>
	</section>
	);
}

export default Hero;