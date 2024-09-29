import { FolderKanban } from 'lucide-react';
import Link from 'next/link';

type LogoProps = {
  title?: string;
  href: string;
  labelShown?: boolean;
};
export default function Logo({ title, href, labelShown = true }: LogoProps) {
  return (
    <Link href={href} className='-m-1.5 p-1.5 flex items-center space-x-2'>
      <span className='sr-only'>{title}</span>
      {/* <img
        alt=""
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        className="h-8 w-auto"
      /> */}
      <FolderKanban className='h-8 w-8 text-indigo-600' />
      <span className='font-bold'>{title}</span>
    </Link>
  );
}
