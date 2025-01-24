import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls} from "@react-three/drei";

function Model(props) {
    const { scene } = useGLTF("/model.gltf");
    return <primitive object ={scene} {...props} />
}

function AR3D() {
    return (
    <Canvas  camera={{ fov: 80}} style={{"position": "absolute"}}>
            <color attach="background" args={["black"]} />
            <PresentationControls speed={1.5} global>
                <Stage environment={null} intensity={1} shadows>
                    <Model />
                </Stage>
            </PresentationControls>
    </Canvas>
    );
}

export default AR3D;