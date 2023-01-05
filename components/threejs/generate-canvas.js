import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useEffectOnce } from "react-use";
import { useState, useEffect } from "react";
import MyCustomBox from "./my-custom-box";

function SetUp() {
    // THESE USETHREE AND USEREF ARE THE CULPRIT
    const root = useThree();

    let camera = root.camera;
    camera.near = 5;
    camera.far = 15000;
    camera.position.z = 5;

    let renderer = root.gl;
    renderer.setClearColor("#181E26");
    // renderer.setClearColor("black");
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    
    // Ugly code to see scrollPosition
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useFrame(() => {
        camera.position.z = 5 + scrollPosition/100;
    })
}


export default function GenerateCanvas() {

    var boxes = [];
    // Change to useEffectOnce sometimes
    useEffect(() => {
        let count = 3000;
        let rad = 50;

        for (let i = 0; i < count; i++) {
            let ranPosX = rad * ( 2.0 * Math.random() - 1.0 );
            let ranPosY = rad * ( 2.0 * Math.random() - 1.0 );
            let ranPosZ = rad * ( 2.0 * Math.random() - 1.0 );
            let ranRotX = Math.random() * Math.PI;
            let ranRotY = Math.random() * Math.PI;
            let ranRotZ = Math.random() * Math.PI;

            boxes.push(<MyCustomBox posX={ranPosX} posY={ranPosY} posZ={ranPosZ} rotX={ranRotX} rotY={ranRotY} rotZ={ranRotZ} />);
        }
        // console.log("Generating boxes!");

        // return () => {
        //     boxes = [];
        // }
    })

    return (
        <Canvas style={{ width: "99.8vw", height: "100vh" }}>
            <SetUp/>
            <pointLight intensity={0.1} position={[0, 0, 100]} />
            {boxes}
        </Canvas>
    );
}