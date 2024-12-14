import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
// import tweetSuicideDetection from "../../public/images/articles/tweet-suicide-detection.png";
import Image from 'next/image';
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from 'framer-motion';
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import { useRef } from 'react';
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import Redux from "../../public/images/articles/What is Redux with easy explanation.png";
import article6 from "../../public/images/articles/What is higher order component in React.jpg";
import TransitionEffect from '@/components/TransitionEffect';


const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }


    return (
        <Link href={link} target='_blank' 

        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}

        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
            style={{x:x, y:y }}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration: 0.2}}}
            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center 
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        '>
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}


const FeaturedArticles = ({img, title, time, summary, link}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>

            <Link href={link} target='_blank' 
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
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
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>Yu Sun | Articles Page</title>
            <meta name="description" content="any description" />
        </Head>

        <TransitionEffect />

        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Articles" className='mb-16
                    lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl
                ' />
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticles 
                        title="Form Validation In Reactjs: Build A Resuable Custom Hook For Inputs and Error Handling"
                        summary="Form validation is a critical part of web applications. It ensures data integrity and enhances user experience by providing immediate feedback. 
                        React, with its component-based architecture, makes it easy to create reusable logic, and in this article, we'll build a custom hook for form validation and error handling."
                        time="10 mins read"
                        link="https://medium.com/p/4114c10f7432/edit"
                        img={article4}
                    />
                    <FeaturedArticles 
                        title="Create a Loading Screen in React.js"
                        summary="Loading screens are an essential part of any application that fetches data from external sources or performs time-consuming tasks. 
                        They provide users with a visual cue that something is happening in the background, improving the user experience (UX). In this article, we’ll walk through how to create a simple, reusable loading screen in React.js."
                        link="https://medium.com/p/4114c10f7432/edit"
                        img={article2}
                        time="15 mins read"
                    />
                </ul>
                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
                <ul>
                    <Article 
                        title="What is Higher Order Component in React"
                        date="September 23, 2024"
                        link="/"
                        img={article6}
                    
                    />
                    <Article 
                        title="What is Redux with Easy Explanation"
                        date="September 26, 2024"
                        link="/"
                        img={Redux}
                    
                    />
                    <Article 
                        title="Smooth Scrolling in Reactjs"
                        date="October 2, 2024"
                        link="/"
                        img={article5}
                    
                    />
                    <Article 
                        title="Create Modal Component in React Using React Portals"
                        date="October 23, 2024"
                        link="/"
                        img={article3}
                    
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles;