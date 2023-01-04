


export default function MyCustomBox({posX, posY, posZ, rotX, rotY, rotZ}) {
    return (
        <mesh position={[posX, posY, posZ]} rotation={[rotX, rotY, rotZ,]}>
            <boxGeometry />
            <meshPhongMaterial color={0xffffff}></meshPhongMaterial>
        </mesh>
    );
}