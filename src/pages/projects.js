import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/Yu'sBlog.png";
import project2 from "../../public/images/projects/BandSite.png";
import project3 from "../../public/images/projects/TravelSite.png";
import coinTracker from "../../public/images/projects/coin-tracker.png";
import inStock from "../../public/images/projects/inStock.png";
import brainFlix from "../../public/images/projects/brainFlix.png";
import sendMe from "../../public/images/projects/sendMe.png";
import jsProjects from "../../public/images/projects/jsProjects.png";
import Image from 'next/image';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';


const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            "></div>

                <Link href={link} target='_blank' 
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
                >
                    <FramerImage src={img} alt={title} className='w-full h-auto' 
                        whileHover={{scale:1.05}}
                        transition={{duration:0.2}}
                        priority
                        sizes='(max-width: 768px) 100vw,
                        (max-width: 1200px) 50 vw,
                        50vw'
                    />
                </Link>

                <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                    <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

                    <div className='mt-2 flex items-center'>
                        <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                        <Link href={link} target="_blank" 
                            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                            sm:px-4 sm:text-base'
                            > Visit Project </Link>
                    </div>
                </div>

            
        </article>
    )
}

const Project = ({title, type, summary, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>

            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light dark:border-light 
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"></div>

            <Link href={link} target='_blank' 
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" 
                        className='text-lg font-semibold underline dark:text-light md:text-base'
                        > Visit </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'>
                        {" "} 
                        <GithubIcon /> {" "} 
                    </Link>
                    
                </div>

            </div>
        </article>
    )
}


const projects = () => {
  return (
    <>
        <Head>
            <title>Yu Sun | Projects Page</title>
            <meta name="description" content="any description" />
        </Head>

        <TransitionEffect />

        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Projects" 
                className='mb-16 lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                />

                <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Coin Tracker"
                            img={coinTracker}
                            summary="A Full-Stack Financial Dashboard Application built with React, Node.js, and MySQL, featuring JWT authentication for secure access and personalized data management. 
                            The app delivers a seamless user experience with React Router for navigation, Axios for efficient API communication, and a responsive interface styled with Tailwind CSS. 
                            It incorporates Chart.js for dynamic data visualization, enabling users to make informed financial decisions, and leverages a robust MySQL backend for scalable and reliable data storage."
                            link="https://github.com/serenasunyu/CoinTrack"
                            github="https://github.com/serenasunyu/CoinTrack"
                            type="Academic Projects"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                title="BandSite"
                                img={project2}
                                summary="A responsive website for a fictional band, demonstrating skills in Flexbox, SASS, and BEM methodology for clean, scalable styling. 
                                The site integrates with external APIs to display dynamic content and is fully responsive."
                                link="https://bandsiteproject-663gdu2zo-serenasunyus-projects.vercel.app/"
                                github="https://github.com/serenasunyu/BandSite-Project"
                                type="Bootcamp Project"
                            />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                title="TravelSite"
                                img={project3}
                                summary="This project focused on building a responsive travel-themed website using HTML and CSS. The project emphasized core web development principles, with a focus on layout design, styling, and responsive techniques."
                                link="https://travelsiteproject-qpeaotjht-serenasunyus-projects.vercel.app/"
                                github="https://github.com/serenasunyu/Travel-Site-Project"
                                type="Bootcamp Project"
                            />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                title="BrainFlix"
                                img={brainFlix}
                                summary="Developed a React single-page application with react-router for multi-page functionality. Transitioned from a mock API to an actual backend, implementing GET, POST endpoints for video data, including video lists and detailed views.
                                 Utilized NPM for managing dependencies and JavaScript libraries."
                                link="https://yu-sun-brainflix.vercel.app"
                                github="https://github.com/serenasunyu/yu-sun-brainflix"
                                type="Bootcamp Project"
                            />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                title="Instock"
                                img={inStock}
                                summary="Built with React.js, Node.js, and MySQL, this web application streamlines warehouse and inventory management through a responsive and intuitive user interface. It features RESTful APIs for seamless CRUD operations with robust form validation, ensuring data integrity. 
                                The application leverages Knex for efficient database management and Jira for effective team collaboration."
                                link="https://instock-xi.vercel.app"
                                github="https://github.com/serenasunyu/instock"
                                type="Bootcamp Project"
                            />
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject 
                            title="Full Stack MERN Blog"
                            img={project1}
                            summary="A responsive blog application built with the MERN stack (MongoDB, Express, React, Node.js). 
                            This project features secure user authentication with JSON Web Tokens and Google OAuth, a protected admin dashboard for managing posts,
                             comments, and users, and a user-friendly dark mode. Advanced search functionality allows users to search, filter, and sort posts. 
                             The interactive comment system enables users to leave, edit, and delete comments, fostering community engagement. 
                             The application is designed for seamless performance across devices."
                            link="https://mearn-blog-u807.onrender.com"
                            github="https://github.com/serenasunyu/mearnBlog"
                            type="MERN Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                title="SendMe"
                                img={sendMe}
                                link="https://github.com/serenasunyu/SendMe"
                                github="https://github.com/serenasunyu/SendMe"
                                type="C# and Typescript Project"
                                summary="Developed a full-stack application enabling users to upload, view, and download images and other media files. Built the frontend with React and TypeScript, featuring a responsive interface for seamless file management. The backend, developed in .NET, ensures secure and efficient media storage, retrieval, and handling."
                            />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                title="100-JavaScript-Projects"
                                img={jsProjects}
                                link="https://github.com/serenasunyu/100-JavaScript-Projects"
                                github="https://github.com/serenasunyu/100-JavaScript-Projects"
                                type="JavaScript Projects"
                                summary="This GitHub folder contains a collection of 100 ongoing JavaScript projects designed to enhance and practice core JavaScript skills. 
                                Each project is focused on improving various aspects of JavaScript, from basic syntax and algorithms to advanced topics like DOM manipulation, APIs, and asynchronous programming. 
                                Through these projects, I am actively working to deepen my understanding of JavaScript concepts and refine my skills. By building solutions for real-world challenges, 
                                I am progressively strengthening my problem-solving abilities and gaining hands-on experience, which will help me become more proficient in JavaScript development."
                            />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects;