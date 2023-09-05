"use client";

import Head from "next/head";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub, AiOutlineBook, AiOutlineLink } from "react-icons/ai";
import {FaCloudMoonRain, FaReact } from "react-icons/fa";
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown';
import Image from "next/image";
import deved from "../public/prog.png";
import design from "../public/complements.gif";
import code from "../public/codecard.gif";
import wave from "../public/olita.gif";
import couch from "../public/couch.gif";
import web1 from "../public/wolfbuilding.png";
import web2 from "../public/iphonepage.png";
import web3 from "../public/portafolio.png";
import web4 from "../public/pizzeli.png";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Thomas Romero Portfolio</title>
        <meta name="description" content="Generated by created..."></meta>
        <link rel="icon" href="./favicon.ico"></link>
      </Head>

      <main className="bg-sky-50 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-5 mb-12  flex justify-between">
            <ul className="text-cyan-900 flex items-center  md:text-xl dark:text-red-400">
              <li className=" flex cursor-pointer">
                <FaCloudMoonRain 
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pinter text-3xl"
                />
              </li>
              <li>
                <Link
                  href="/ThomasRomeroCV.pdf"
                  className=" flex cursor-pointer text-3xl py-2 ml-8"
                >
                <AiOutlineBook/>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-cyan-900 font-medium md:text-6xl dark:text-red-400">
              Thomas Romero
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer
            </h3>
            <p className="text-md pt-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              <span className="text-cyan-600 font-bold dark:text-red-400	">+4</span> años de experiencia en el mundo del desarrollo
            </p>
          </div>
          <div className=" text-4xl flex justify-center gap-12 text-gray-600 dark:text-white ">
            <a
            
            href="https://www.linkedin.com/in/thomas-romero-05a508245/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.youtube.com/@thomasromero5600/videos">
              <AiFillYoutube />
            </a>
            <a href="https://github.com/Thhomas1">
              <AiFillGithub />
            </a>
          </div>
          <div className="flex flex-row-reverse dark:fill-blue-500">
             <UseAnimations animation={arrowDown} size={60} />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-blue-200 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-85 md:w-85 dark:from-red-300">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className=" flex flex-wrap md:flex-row">
          <div className=" lg:basis-1/2">
            <h3 className="text-4xl py-1 text-cyan-950 font-semibold dark:text-white">About me</h3>
            <p className="justify-self-center	 text-md py-2 leading-8 text-gray-800 dark:text-white">
              Me considero una persona altamente organizada y proactiva,
              con una habilidad para colaborar efectivamente en entornos diversos.
              Disfruto especialmente trabajando en equipos multidisciplinarios,
              donde puedo articular ideas técnicas de manera concisa y buscando constantemente oportunidades 
              para seguir aprendiendo.
              </p>
              <p className="justify-self-center	 text-md py-2 leading-8 text-gray-800 dark:text-white">
              Mi experiencia en
              <span className="text-amber-400 font-bold"> JavaScript </span> y
              <span className="text-cyan-300 font-bold	"> TypeScript </span>
              me ha permitido desarrollar soluciones robustas y estar en
              constante aprendizaje en sus actualizaciones.
              
            </p>
          </div>
          
          <div className="overflow:hidden md:basis-1/2 lg:basis-1/2">
            <div className="overflow relative mx-auto w-100 h-100  md:h-96 md:w-96 lg:mr-4">
            <Image src={code} objectFit="cover" width={500} />
          </div>
          </div>
          </div>

      <div> 
        <h3 className="text-4xl text-cyan-950 font-semibold py-1 dark:text-white">Experiencia</h3>
        <div className='relative my-10 grid grid-cols-[30px_1fr] gap-4 '>
          <div className='flex flex-col items-center gap-2 '>
            <div className='rounded-full bg-white-10 p-1' />
            <div className='border-cyan-800 h-full w-0 border border-dashed dark:border-sky-200	' />
          </div>
          <div className='flex flex-col gap-2'>
          
          <h2 className='text-xl font-bold text-cyan-900 dark:text-red-400'>Desarrollador Junior</h2>
          <h3 className='text-md font-bold text-cyan-800 dark:text-red-300'>Startnet</h3>
          <span className='text-sm text-cyan-700 dark:text-red-200'> Agosto 2022 - Actualidad</span>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white max-w-[80ch]">
              La empresa que me brindó la oportunidad de ingresar al mundo laboral.
              En este primer paso crucial de mi carrera, tengo el privilegio de trabajar
              junto a un equipo excepcional y aprender de ellos constantemente
              para aplicar mis habilidades técnicas en situaciones reales. 
              Esta experiencia marcó el inicio de mi trayectoria 
              y me permite adquirir valiosos conocimientos prácticos.</p>
        </div>
        </div>
        <div className="flex items-start w-150 h-100">
            <Image src={wave} objectFit="cover" width={150} />
          </div>
        <div className='relative my-10 grid grid-cols-[30px_1fr] gap-4 '>
          <div className='flex flex-col items-center gap-2'>
            <div className='rounded-full bg-primary-50 p-1' />
            <div className='border-cyan-800 h-full w-0 border border-dashed dark:border-sky-200' />
          </div>
          <div className='flex flex-col gap-2'>
          
          <h2 className='text-xl font-bold text-cyan-900 dark:text-red-400'> Desarrollador Freelance</h2>
          <h3 className='text-md font-bold text-cyan-800 dark:text-red-300'>MyDevClub</h3>
          <span className='text-sm text-cyan-700 dark:text-red-200'> Marzo 2022 - Agosto 2022</span>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white max-w-[80ch]">
            Con un grupo de amigos desarrollamos un sitio web para una constructora de Quilmes.
            La combinación de habilidades y dedicación en nuestro
            equipo potenció nuestra capacidad para superar desafíos y alcanzar resultados
            sobresalientes.</p>
            
        </div>
        </div>
      </div>

            {/* Poner aca algun diseño picante y agarrar el tailwind  */}

        </section>
        <section>
          <div>
            <h3 className="pt-32 text-4xl py-1 text-cyan-900 font-semibold dark:text-white">Proyectos</h3>
          </div>
          <div className=" flex flex-col gap-10 mt-20 lg:flex-row lg:flex-wrap lg:m-10">
            <div className="basis-1/3 flex-1 mar">
              <h3 className="text-2xl py-1 text-orange-500 dark:text-white font-bold">
                Wolf Building
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Junto a un increible equipo creamos un sitio web para un cliente potencial de la construccion.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Herramientas: 
                <span className="text-orange-600 font-semibold">
                  {" "}
                  ReactJs, MaterialUI, Firebase && Postman{" "}
                </span>
              </p>
              <a
                className="text-amber-600 text-xl py-2 lg:flex justify-center"
                href="https://www.thewolfbuilding.com.ar/"
              >
                <AiOutlineLink />
              </a>
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <h3 className="text-2xl py-1 text-teal-950 dark:text-white font-bold">
                Apple Page
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Sitio web estilo apple page front-page con librerias de Javascript.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Herramientas:
                <span className="text-teal-600 font-semibold">
                  {" "}
                  Javascript, GSAP, BarbaJs && CustomCSS{" "}
                </span>
              </p>
              <a
                className=" text-teal-600 text-xl py-2 lg:flex justify-center"
                href="https://apple-page-i9sw4pc8c-thhomas1.vercel.app/?vercelToolbarCode=yQJUbqXqqTPFFhK"
              >
                <AiOutlineLink />
              </a>
              <Image
                href="https://apple-page-i9sw4pc8c-thhomas1.vercel.app/?vercelToolbarCode=yQJUbqXqqTPFFhK"
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            
            <div className="basis-1/3 flex-1">
              <h3 className="text-2xl py-1 text-red-600 dark:text-white font-bold ">
                Pizzeli 
                
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Front-page para un cliente potencial que use como muestra.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Herramientas:
                <span className="text-red-500 font-semibold">
                  {" "}
                  NextJs, Typescript, TailwindCSS && Docker{" "}
                </span>
              </p>
              <a
                className="text-xl py-2 text-red-600 lg:flex justify-center"
                href="https://pitzeli.vercel.app/"
              >
                <AiOutlineLink />
              </a>
              <Image
                href=""
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <h3 className="text-2xl py-1 text-teal-950 dark:text-white font-bold">
                Portfolio
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Sitio web para mostrar mis trabajos y progresos en el rubro.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Herramientas:
                <span className="text-cyan-500 font-semibold">
                  {" "}
                  NextJs, Javascript, TailwindCSS && CustomCSS{" "}
                </span>
              </p>
              <a
                className=" text-xl py-2 text-cyan-600 lg:flex justify-center"
                href="https://portfolio-vfht.vercel.app/"
              >
                <AiOutlineLink />
              </a>
              <Image
                href="https://apple-page-i9sw4pc8c-thhomas1.vercel.app/?vercelToolbarCode=yQJUbqXqqTPFFhK"
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>

            {/* Seguir aca */}
          </div>
           <div className="lg:flex gap-10">
            <div className="bg-teal-50  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-red-400 dark:text-white">
              <Image src={couch} width={150} height={150} />
              <h3 className="text-lg font-semibold pt-8 pb-2">Herramientas</h3>
              <p className="py-2">
                Herramientas que me permiten desarrollar y superar desafíos con
                creatividad y eficiencia
              </p>
              <h4 className="py-4 text-teal-600 font-semibold">Herramientas que uso :)</h4>

              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">Angular</p>
              <p className="text-gray-800 py-1 dark:text-white">NodeJS</p>
              <p className="text-gray-800 py-1 dark:text-white">MySQL</p>
              <p className="text-gray-800 py-1 dark:text-white">-</p>
              <p className="text-gray-800 py-1 dark:text-white">Javascript</p>
              <p className="text-gray-800 py-1 dark:text-white">Typescript</p>
            </div>
            <div className=" bg-teal-50  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white-300">
              <Image src={design} width={150} height={150} />
              <h3 className="text-lg font-semibold pt-8 pb-2 mt-5">
                Complementos
              </h3>
              <p className="py-2">
                Frameworks y otras herramientas que me permiten 
                ahorrar tiempo de desarrollo
        
              </p>
              <h4 className="py-4 text-teal-600 font-semibold">Herramientas que uso :)</h4>
              <p className="text-gray-800 py-1">NextJs</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
              <p className="text-gray-800 py-1">GSAP</p>
              <p className="text-gray-800 py-1">BarbaJs</p>
              <p className="text-gray-800 py-1">Sass</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">Postman</p>
            </div>
          </div>
          
        </section>
        <footer className="mt-5 flex-col text-center text-sm lg:flex lg:justify-center border-t-2 border-dashed">
          <div className='text-sky-500 p-10  footer__container dark:text-white'>
          { `Thomas Romero © ${new Date().getFullYear()}` }
          
        </div>
        </footer>
      </main>
    </div>
  );    
}
// Finished
// Thomas Romero
