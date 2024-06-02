import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className} antialiased`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-red-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
            <div
              className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
            />
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        {/* </div>
          <div className="p-6 max-w-sm mx-auto bg-black rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
          </div>
          <div>
            <div className="text-xl font-medium text-white">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div> */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src = "/hero-desktop.png"
            // Setting Width and Height to avoid layout shift; Identical to source image
            width={1000}
            height={760}
            // hidden to not display image on mobile screens (hidden to not display on DOM Mobile screens, md:block for desktop)
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image 
            src = "/hero-mobile.png"
            width={560}
            height={620}
            // block for DOM mobile screeens and md:hidden for desktop (to)
            className='block md:hidden'
            alt="Screenshots of dashboard project showing mobile version"
          />
        </div>
        
      </div>

    </main>
  );
}
