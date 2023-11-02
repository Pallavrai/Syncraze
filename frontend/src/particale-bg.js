import Particles from "react-particles-js"
import particlesConfig from "./particle/particle-config";


export default function ParticleBackground(){
    return (        
        <Particles prams={particlesConfig}></Particles>
        );
}