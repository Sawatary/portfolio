import Image from 'next/image';
import Link from 'next/link';

export const ContactBtn = () => {
  return (
    <>
      <Image src={'/images/bochi.gif'} alt="" fill className="object-cover" />
      <Link href="#" className="z-[99] self-end justify-self-center font-bold text-dark-green hover:text-black hover:underline">
        Hire me pls
      </Link>
    </>
  );
};
