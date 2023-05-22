import { useRouter } from "next/router";
import {motion as m} from 'framer-motion';
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function Success() {

  const [pieces, setPieces] = useState(200);
  const stopConfetti = () =>{
    setTimeout(() => {
      setPieces(0)
    }, 3000);
  }

  useEffect(() => {
    stopConfetti();
  }, [])
  

  const router = useRouter();

  return (
    <m.main initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='h-screen flex items-center justify-center'>
      <div className="bg-white  rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-latoBold">Gracias por tu correo {router.query.name} ✨</h1>
        <p className="text-lg text-gray-500">
        Te hemos enviado un correo electrónico a {router.query.email}.{' '}¡Nos pondremos en contacto con usted tan pronto como podamos!
        </p>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces}/>
    </m.main>
  )
}