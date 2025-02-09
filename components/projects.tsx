'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const items = [
 {
  name: 'Todos App',
  technologies: ['React', 'TypeScript', 'SCSS', 'TailwindCSS'],
  preview: '/projects/todos.gif',
  website: 'https://todolist-v2-cyan.vercel.app/'
 },
 {
  name: 'Aviasales Clone',
  technologies: ['React', 'TypeScript', 'TailwindCSS', 'Redux Toolkit', 'RTK Query'],
  preview: '/projects/aviasales.gif',
  website: 'https://aviasales-beta-drab.vercel.app/'
 },
 {
  name: 'Movies App',
  technologies: ['React', 'TypeScript', 'Ant Design', 'Redux Toolkit', 'RTK Query'],
  preview: '/projects/movies.gif',
  website: 'https://movies-db-one-psi.vercel.app/'
 }
];

export const Projects = () => {
 return (
  <Carousel>
   <CarouselContent>
    {items.map(item => (
     <CarouselItem key={item.name}>
      <div className="relative mb-2 h-[250px]">
       <Image src={item.preview} alt={item.name} fill className="rounded-lg object-cover" />
      </div>
      <p className="text-wrap text-center font-bold md:text-lg">{item.name}</p>
      <ul className="mt-2 hidden flex-wrap justify-center gap-2 md:flex">
       {item.technologies.map(tech => (
        <li key={tech} className="w-fit rounded-lg bg-grey p-1 text-xs">
         {tech}
        </li>
       ))}
      </ul>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
       <Button asChild variant="default">
        <Link href={item.website} target="_blank">
         Demo
        </Link>
       </Button>
      </div>
     </CarouselItem>
    ))}
   </CarouselContent>
   <CarouselPrevious className="left-0 bg-black text-white" />
   <CarouselNext className="right-0 bg-black text-white" />
  </Carousel>
 );
};
