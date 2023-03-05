import glob from 'fast-glob';
import * as path from 'path';

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(`../pages/play/${articleFilename}`);
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'pages/play'),
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => a.order - z.order);
}
