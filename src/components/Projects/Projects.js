import React from 'react';
import expenseImg from '../../Assets/expense-tracker.png';
import movieImg from '../../Assets/movie-library.png';

const Projects = () =>{
  return (
    <section
      id="projects"
      className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-center">
        My <span className="text-amber-900">Projects</span>
      </h2>
      <div
        className="p-10 bg-blue-300 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://movie-library-page.netlify.app/"
            className="w-full h-full"
          >
            <img
              //src="https://media.geeksforgeeks.org/wp-content/uploads/20230927120905/gfg.png"
              src={movieImg}
              alt="Project 1"
              className="w-full h-full 
										bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://github.com/NexusNeeraj/movie-library"
            >
              Movie Library
            </a>
          </h2>
          <p>
          It's a movie-app which fetches movies list using omdb api and the movie list is only view by authenticated user means user first have to login/register to view list of movies and also user can create their collection of movies.
          </p>
        </div>
      </div>
      <div
        className="p-10 bg-blue-300 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full"
      >
        <div className="w-80 rounded">
          <a
            href="https://expense-tracker-web-page.netlify.app/"
            className="w-full h-full"
          >
            <img
              //src="https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
              src={expenseImg}
              alt="Project 2"
              className="w-full h-full bg-cover rounded"
            />
          </a>
        </div>
        <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
          <h2 className="font-bold text-3xl text-center">
            <a
              className="hover:underline"
              href="https://github.com/NexusNeeraj/Expense-Tracker"
            >
              Expense Tracker
            </a>
          </h2>
          <p>
          Expenses tracker webpage with a functionality of filter by year and add expenses with title, date and amount.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;