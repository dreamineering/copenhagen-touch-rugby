import Head from 'next/head';
import Link from 'next/link';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { formatDate } from '@/lib/formatDate';
import { getAllArticles } from '@/lib/getAllArticles';

function Article({ article }) {
  return (
    <article className="pb-12 md:grid md:grid-cols-4 md:items-baseline ">
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
        <meta name="description" content="Rules and instructions on how to play touch rugby" />
      </Head>
      <SimpleLayout title="Play" intro="">
        <div className="flex max-w-3xl flex-col space-y-6 pb-12">
          <p className="text-lg tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
            We play informally, creating as many games as player numbers allow. Just look for a
            group throwing a ball around, introduce yourself, and then you are welcome to join the
            action.
          </p>
          <p className="text-lg tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
            Copenhagen Touch Rugby recently became a{' '}
            <Link href="https://www.dgi.dk/foreningsledelse/viden-vaerktoejer/viden-vaerktoejer/start-forening/hvad-er-en-forening">
              <span className="text-green-700 hover:text-green-800">registered forening</span>
            </Link>{' '}
            with plans to create a competitive league. To learn more join our{' '}
            <Link href={'https://www.facebook.com/groups/172852439436767'}>
              <span className="text-green-700 hover:text-green-800">Facebook group</span>
            </Link>
          </p>
        </div>
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
