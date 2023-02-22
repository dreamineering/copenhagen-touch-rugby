import Head from 'next/head';
import Link from 'next/link';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { formatDate } from '@/lib/formatDate';
import { getAllArticles } from '@/lib/getAllArticles';

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline pb-12 ">
      <Card className="md:col-span-3">
        <Card.Title href={`/play/${article.slug}`}>{article.title}</Card.Title>
        {/* <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow> */}
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Learn more</Card.Cta>
      </Card>
      {/* <Card.Eyebrow as="time" dateTime={article.date} className="mt-1 hidden md:block">
        {formatDate(article.date)}
      </Card.Eyebrow> */}
    </article>
  );
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Play - Copenhagen Touch Rugby</title>
        <meta name="description" content="Thoughts on playing the game" />
      </Head>
      <SimpleLayout title="Playing the Game" intro="">
        <p className="text-xl pb-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
          Please track{' '}
          <Link href={'https://www.facebook.com/groups/172852439436767/events'}>
            <span className="text-green-700">events</span>
          </Link>{' '}
          posted to our{' '}
          <Link href={'https://www.facebook.com/groups/172852439436767'}>
            <span className="text-green-700">facebook group</span>
          </Link>{' '}
          to confirm your intent to play. If there are insufficient numbers, play will be cancelled.
          To prevent a trip to the park for nothing, it pays to{' '}
          <Link href={'https://www.facebook.com/groups/172852439436767/events'}>
            <span className="text-green-700">confirm your attendance</span>
          </Link>
          .
        </p>
        <p className="text-lg pb-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
          Playing touch is a great way to get fit and make new friends in Copenhagen. We play year
          round in Faelledparken at 10:30 on Sunday and at 18:00 on Wednesday during the Danish
          summertime.
        </p>
        <p className="text-lg pb-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
          The games are of a pick-up nature, and we play as many games as players and subs allow. So
          just find a group throwing a ball around, introduce yourself and then you are in. We are a
          friendly bunch from all over the world so don't worry about formalities, just play in a
          good spirit and enjoy yourself.
        </p>
        <p className="text-lg pb-12 tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
          Recently we have become a registered with the local authorities with a roadmap towards
          competing internationally, so there are plans for more formal competition. You can find
          more about that on our about page.
        </p>

        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  };
}
