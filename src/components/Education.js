import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({type, time, place, info}) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between]'>

            <LiIcon reference={ref} />
            <motion.div
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{duration:0.5, type:"spring"}}
            >

                <h3 className='mb-4 capitalize font-bold text-2xl'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75'>
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
        offset: ["start end", "center start"]
    });
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>
        <div ref={ref} className='w-[65%] mx-auto relative'>
            <motion.div style={{scale: scrollYProgress}} className='absolute left-6 top-0 w-[4px] h-full bg-dark origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
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