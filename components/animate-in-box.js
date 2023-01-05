import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'




export default function AnimateInBox(props){
    let start;
    const distance = 250;

    if (props.direction == "left") {
        start = distance;
    }
    else {
        start = -distance;
    }

    const boxVariant = {
        visible: { 
          x: 0,
          opacity: 1, 
          transition: 
          { 
            delay: 0.25,
            duration: 0.5 
          }
        },
        hidden: { 
          x: start,
          opacity: 0, 
        }
    };

    const control = useAnimation();
    const [ref, inView] = useInView({threshold: 0.30, triggerOnce: true});

    useEffect(() => {
        if (inView) {
        control.start("visible");
        } else {
        control.start("hidden");
        }
    }, [control, inView]);

    return (
        <>
            <motion.div
                className="box"
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                >
                {/* <span className=' bg-red-700 text-center'>Box {props.num} </span> */}
                {props.children}
                </motion.div>
        </>
    )
}