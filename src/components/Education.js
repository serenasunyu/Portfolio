import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({type, time, place, info}) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] flex flex-col md:w-[80%]'>

            <LiIcon reference={ref} />
            <motion.div
                initial={{y: 80}}
                whileInView={{y: 0}}
                transition={{duration:0.3, type:"easeInOut"}}
            >

                <h3 className='mb-4 capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    // Map the scroll progress to scaleY for the vertical line
    const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 0.9]);

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY: lineScaleY}} className='absolute left-6 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className='w-full flex flex-col items-end ml-4 xs:ml-2'>
                <Details 
                type="Diploma in Software Engineering" 
                time="Jan 2024 - Apr 2024"
                place="BrainStation"
                />
                <Details 
                type="Diploma in Data Science" 
                time="Jun 2023 - Sep 2023"
                place="Lighthouse Labs"
                />
                <Details 
                type="Diploma in Paralegal" 
                time="Jan 2019 - May 2020"
                place="Mohawk College"
                />
                <Details 
                type="Master Degree in Globalization Studies" 
                time="Sep 2015 - Nov 2016"
                place="McMaster University"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education;