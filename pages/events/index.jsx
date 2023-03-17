import Head from 'next/head';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import { formatDate } from '@/lib/formatDate';
import { getAllEvents } from '@/lib/getAllEvents';

function Event({ event }) {
  return (
    <event className="md:grid md:grid-cols-4 md:items-baseline pb-12 ">
      <Card className="md:col-span-3">
        <Card.Title href={`/events/${event.slug}`}>{event.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={event.date} className="md:hidden" decorate>
          {formatDate(event.date)}
        </Card.Eyebrow>
        <Card.Description>{event.description}</Card.Description>
        <Card.Cta>Learn more</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" dateTime={event.date} className="mt-1 hidden md:block">
        {formatDate(event.date)}
      </Card.Eyebrow>
    </event>
  );
}

export default function EventsIndex({ events }) {
  return (
    <>
      <Head>
        <title>Events - Copenhagen Touch Rugby</title>
        <meta name="description" content="Events of the past and future" />
      </Head>
      <SimpleLayout title="Events" intro="Events of the past and future">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {events.map((event) => (
              <Event key={event.slug} event={event} />
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
      events: (await getAllEvents()).map(({ component, ...meta }) => meta),
    },
  };
}
