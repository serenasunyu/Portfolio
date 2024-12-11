import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import AnimatedText from '../components/AnimatedText';
import Head from 'next/head';
import profilePic from '../../public/images/profile/designer.jpeg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from'@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value]);
    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Yu Sun | About Page</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='font-medium'>
                        Hi, I’m Yu, a full-stack developer with a strong foundation in data science and software engineering. 
                        I’ve completed intensive bootcamps in Data Science and Full Stack Engineering, equipping me with a robust skill set in both front-end and back-end technologies.
                        </p>
                        <p className='my-4 font-medium'>
                        In addition to my technical training, I bring five years of customer service experience, which has sharpened my problem-solving skills and commitment to delivering outstanding results.
                        </p>
                        <p className='my-4 font-medium'>
                        I’m eager to apply my technical expertise to create intuitive and efficient digital solutions. 
                        My goal is to make a meaningful impact by building applications that improve user experiences and drive business success.
                        </p>
                    </div>

                    <div className='col-span-3 relative h-[100%] rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
                        <Image src={profilePic} alt="Yu" className="w-full h-auto rounded-2xl" 
                            priority
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50 vw,
                            33vw'
                        />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={5} />+
                            </span>
                            <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-md sm:text-base xs:text-sm'>client support experience</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={10} />+
                            </span>
                            <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-md sm:text-base xs:text-sm'>projects completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={2} />+
                            </span>
                            <h2 className='text-lg font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-md sm:text-base xs:text-sm'>bootcamps completed</h2>
                        </div>
                    </div>

                </div>
            <Skills /> 
            <Experience /> 
            <Education />  
            </Layout>
        </main>
    </>
  )
}

export default about