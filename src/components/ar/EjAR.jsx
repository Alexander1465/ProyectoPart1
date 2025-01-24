//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import XrCube from './XrCube';
import XrCylinder from './XrCylinder';
import { ARButton, XR } from "@react-three/xr";


function EjAR(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrCylinder />
                </XR>
            </Canvas>
        </>
)

}

export default EjAR;