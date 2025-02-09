'use client';
import githubIcon from '@/public/icons/Github.png';
import facebookIcon from '@/public/icons/Facebook.png';
import tgIcon from '@/public/icons/telegram.png';
import vkIcon from '@/public/icons/Vk.png';
import Link from 'next/link';
import Image from 'next/image';

const items = [
 {
  name: 'Github',
  icon: githubIcon,
  href: 'https://github.com/Sawatary'
 },
 {
  name: 'Facebook',
  icon: facebookIcon,
  href: 'https://www.facebook.com/profile.php?id=61570512062282&locale=ru_RU'
 },
 {
  name: 'Vk',
  icon: vkIcon,
  href: 'https://vk.com/bizxrre'
 },
 {
  name: 'Tg',
  icon: tgIcon,
  href: 'https://t.me/leey43'
 }
];
export const Socials = () => {
 return (
  <ul className="flex items-center justify-around">
   {items.map(item => (
    <li key={item.name}>
     <Link href={item.href} target="_blank" className="block rounded-full bg-yellow p-2 hover:cursor-pointer hover:bg-white">
      <Image src={item.icon} alt={item.name} className="w-6" />
     </Link>
    </li>
   ))}
  </ul>
 );
};
