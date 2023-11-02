import Image from "next/image";

export default function Home() {
  return  (
    <div>
      <CenterTitle />
    </div>
  );
}

function CenterTitle(){
  return (
      <div className="main bg-slate-950 h-screen flex justify-evenly text-white">This is homepage</div>
  );
}
