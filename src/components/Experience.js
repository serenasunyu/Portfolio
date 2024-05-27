import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {

    const ref = useRef(null);

    const workList = work.split(/●|\n/).filter(item => item.trim() !== '').map((item, index) => {
        return <li key={index}><span>● </span>{item.trim()}</li>
    });
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between]'>

            <LiIcon reference={ref} />
            <motion.div
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{duration:0.5, type:"spring"}}
            >

                <h3 className='mb-4 capitalize font-bold text-2xl'>{position}&nbsp;
                <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {address}
                </span>
                <ul className='mt-4 font-medium w-full'>
                    {workList}
                </ul>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>
        <div ref={ref} className='w-[65%] mx-auto relative'>
            <motion.div style={{scale: scrollYProgress}} className='absolute left-6 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                position="Customer Service Manager" 
                company="Nations Fresh Food"
                companyLink="https://www.nationsfreshfoods.ca/"
                time="Aug 2016 - May 2020" 
                address="Hamilton/Mississauga, ON"
                work="● Managed operations of Mississauga/Hamilton branches, overseeing operations, implementing onboarding processes, and setting up financial reporting systems
                ● Demonstrated strong leadership skills, aiding in business growth, and enhancing team members' capabilities
                ● Successfully resolved customer issues, ensuring high-quality service and satisfaction
                ● Implemented strategies that improved Google review scores from 3.7 to 4.5, showcasing the dedication to enhancing customer experience and overall business reputation"
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience