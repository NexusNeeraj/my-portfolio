import React from 'react';
import { ImPointDown } from "react-icons/im";
import myImg from '../../Assets/me.png';

const About = () => {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center max-w-5xl mx-auto"
    >
      <div className="flex-1">
        <img
          // src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
          src={myImg}
          alt="About"
          className="w-full h-full bg-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-5 px-6">
        <div>
          <h2 className="text-center text-5xl font-bold">
            Know Who <strong className="text-amber-900">I'M</strong>
          </h2>
        </div>
        <p className="text-lg">
          Hi Everyone, I am{" "}
          <span className="text-amber-900">Neeraj Gupta </span>
          from <span className="purple"> Basti, India.</span>
          <br />
          I am currently final year student at IET Lucknow.
          <br />
          Apart from coding, some other activities that I love to do!
          <ul>
            <li>
              <ImPointDown /> <span className="text-amber-900">Playing Games</span>
            </li>
            <li>
              <ImPointDown /> <span className="text-amber-900">Listening Music</span>
            </li>
            <li>
              <ImPointDown /> <span className="text-amber-900">Travelling</span>
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default About;