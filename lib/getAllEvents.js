import glob from "fast-glob";
import * as path from "path";

async function importEvent(eventFilename) {
  let { meta, default: component } = await import(
    `../pages/events/${eventFilename}`
  );
  return {
    slug: eventFilename.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllEvents() {
  let eventFilenames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: path.join(process.cwd(), "pages/events"),
  });

  let events = await Promise.all(eventFilenames.map(importEvent));

  return events.sort((a, z) => new Date(z.date) - new Date(a.date));
}
