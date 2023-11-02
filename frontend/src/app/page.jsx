import Image from "next/image";
import ParticleBackground from "../particale-bg";

export default function Home() {
  return  (
    <div>
      <ParticleBackground />
      <CenterTitle />
    </div>
  );
}

function CenterTitle(){
  return (
      <div className="main bg-slate-950 h-screen flex justify-evenly text-white">This is homepage</div>
  );
}
