import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import { InstagramIcon, FacebookIcon, TwitterIcon } from '@/components/SocialIcons';
import crewImage from '@/images/about-crew.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-green-500 dark:text-zinc-200 dark:hover:text-green-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-green-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Container className="">
        <div className="">
          <div className="px-2.5">
            <Image
              src={crewImage}
              alt="The Crew"
              width={1000}
              height={1000}
              className="bg-zinc-100 w-full object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="pt-10">
          <div className="text-xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Join in
            </h1>
            <p className="text-2xl pt-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              Playing touch is a great way to get fit and make friends. Please track{' '}
              <Link href={'https://www.facebook.com/groups/172852439436767/events'}>
                <span className="text-green-700">events</span>
              </Link>{' '}
              posted to our <span className="text-green-700">facebook group</span> to confirm your
              intent to play and track if play is going ahead due to sufficient interest.
            </p>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <h2 className="text-3xl pt-12 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                Registration
              </h2>
              <p>
                Copenhagen Touch Rugby became an officially registered club in 2022, after many
                years of playing at faelledparken on a social basis. The club has been formed with
                the goal of supporting and developing the playing and social needs of the game that
                we all enjoy.
              </p>
              <p>
                The board is currently in contact with København Kommune regarding obtaining rights
                to playing fields at faelledparken and the possibility of receiving financial
                support for our club.
              </p>
              <p>
                To achieve these goals and to cover club expenses we need your support to collect
                player data and fees/subscriptions.
              </p>
              <p>Player subscription fees are due again in spring 2023</p>
              <p>
                Payments can be made to Mobilepay box 2955HH. Treasurer Nick Smith is the owner of
                the box. Please add your contact information here: Current expenses The club
                currently incurs expenses for: Playing equipment, First aid equipment, Bank account,
                Accounting, Digital presence and social events. Board members Contact your board
                members with queries or great ideas through facebook/messenger: An annual general
                meeting will be held in 2023 where all subscribed members are welcome.
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdA1QvK0RF9RsmT9_pEJfsy8PyI3zAj9Ffhrrr5sUIy0mSpcw/viewform?fbclid=IwAR1oHuQ3_npvWT8PtjprZmIvTfnQy8eZ4jgE0yytPm6zDXjQ0cuHXuntXbE">
                  Sign up form
                </a>
              </p>
              <h3 className="text-2xl font-bold">Board Members</h3>
              <p>The club is supported by a board of voluntary members</p>
              <ul>
                <li>Chairman: Matt Humphrey</li>
                <li>Vice Chairman: Scott Rooney</li>
                <li>Welfare Officer: Rita Humeau</li>
                <li>Secretary: Kane Limbrik</li>
                <li>Treasurer: Nick Smith: </li>
              </ul>
            </div>
          </div>
          <div className="py-10">
            <ul role="list">
              <SocialLink
                href="https://www.facebook.com/groups/172852439436767"
                icon={FacebookIcon}
                className="mt-4"
              >
                Follow on Facebook
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/copenhagentouchrugby/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://twitter.com/cphtouchrugby"
                icon={TwitterIcon}
                className="mt-4"
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="mailto:contact@copenhagentouch.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@copenhagentouch.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
