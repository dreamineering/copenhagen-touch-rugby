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
        <div className="pt-10 flex max-w-3xl flex-col">
          <div className="text-xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              About
            </h1>
            <div className="text-xl pt-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl space-y-7">
              <p>
                <Link href="/play">
                  <span className="text-green-700 hover:text-green-600">Playing Touch Rugby</span>
                </Link>{' '}
                is a great way to gain fitness while making new friends when living in Copenhagen.
                We play year round in Faelledparken at <strong>10:30 on Sunday</strong> and at{' '}
                <strong>18:00 on Wednesday</strong> during the summertime.
              </p>
            </div>
            <div className="mt-4 text-lg space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                Pick-up games have been played at Faelledparken over many years, providing the
                opportunity for many people of many different nations, ethnicities and genders to
                participate in play equally and make connections that form into life-long
                friendships.
              </p>
              <p>
                We frequently socialise at Bootleggers, particularly to watch rugby. During the
                summer months we often BBQ after the games and arrange meet-ups to swim, play padel
                tennis, take paddle board tours etc. At least once a year a team travels abroad to
                play in a tournament.
              </p>
              <p>
                No experience is required to join in the action, just introduce yourself at the
                sideline and you will be taught the basics of how to play. If you are unfamiliar
                with touch rugby, here is some information on{' '}
                <Link href="/play">
                  <span className="text-green-700 hover:text-green-600">playing the game</span>
                </Link>
                .
              </p>
            </div>
            <div className="mt-4 text-lg space-y-7 text-zinc-600 dark:text-zinc-400">
              <h2 className="text-3xl pt-10 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                Association
              </h2>
              <p>
                Games are still played on a pick-up basis at Faelledparken, but there are plans to
                develop the game further and build a stronger community, therefore Copenhagen Touch
                Rugby become a registered{' '}
                <a href="https://frivillighed.dk/foreningsportalen/hvad-er-en-forening">forening</a>{' '}
                during 2021.
              </p>
              <p>
                The elected board is currently in contact with Copenhagen Council to obtain the
                rights to dedicated playing fields at Faelledparken and gain financial support for
                our growing international commmunity. The board are also working towards plans to
                host a structured competitive league in the future.
              </p>
              <p>
                An annual general meeting will be held in 2023 where all subscribed members are
                welcome to attend.
              </p>
              {/* <p>
                To achieve these goals and to cover club expenses we need your support to collect
                player data and fees/subscriptions. These expenses include playing equipment, first
                aid, bank account, accounting, digital presence and social events.
              </p>
              <p>
                Player subscription fees are due again in spring 2023. To signup please using this{' '}
                <a
                  className="text-green-700"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdA1QvK0RF9RsmT9_pEJfsy8PyI3zAj9Ffhrrr5sUIy0mSpcw/viewform?fbclid=IwAR1oHuQ3_npvWT8PtjprZmIvTfnQy8eZ4jgE0yytPm6zDXjQ0cuHXuntXbE"
                >
                  registration form
                </a>
              </p>
              <p>
                Payments can be made to Mobilepay box 2955HH where Treasurer, Nick Smith is the
                owner of the box.
              </p> */}
              <h3 className="text-2xl font-bold">Board Members</h3>
              <p>
                The club is supported by a board of voluntary members you can contact with queries
                or great ideas through the links below.
              </p>
              <ul role="list">
                <li>
                  <span className="font-semibold">Chairman:</span> Matt Humphrey
                </li>
                <li>
                  <span className="font-semibold">Vice Chairman:</span> Scott Rooney
                </li>
                <li>
                  <span className="font-semibold">Welfare Officer:</span> Rita Humeau
                </li>
                <li>
                  <span className="font-semibold">Secretary:</span> Kane Limbrik
                </li>
                <li>
                  <span className="font-semibold">Treasurer:</span> Nick Smith:{' '}
                </li>
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
