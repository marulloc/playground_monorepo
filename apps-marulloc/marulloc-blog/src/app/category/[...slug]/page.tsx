import Link from 'next/link';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import { getSeriesList } from '@/services/getSeriesList';
import { getArticleList } from '@/services/getArticleList';
import { redirect } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import SeriesCard from '@/components/SeriesCard';
import Container from '@/components/Marulloc-UI/common/Container';
import Paper from '@/components/Marulloc-UI/common/Paper';
import Typography from '@/components/Marulloc-UI/common/Typography';

type TPageProps = {
  params: { slug: string[] };
  searchParams: { tab: 'article' | 'series' | undefined };
};

const Page = async ({ params, searchParams }: TPageProps) => {
  const curPath = params.slug.join('/');
  const curTabQuery = searchParams.tab;

  const articleList = await getArticleList(curPath);
  const seriesList = await getSeriesList(curPath);

  const hasArticle = !!articleList.length;
  const hasSeries = !!seriesList.length;

  if (!curTabQuery) {
    if (hasArticle) redirect(`/category/${curPath}?tab=article`);
    else if (hasSeries) redirect(`/category/${curPath}?tab=series`);
  }

  return (
    <Container as={'main'}>
      <Paper
        className={classNames(
          //
          'px-4 md:px-6 lg:px-8',
          'py-4 md:py-6 lg:py-8',
        )}
        theme={{ color: 'base' }}
      >
        <div className="mb-4 border-b dark:border-zinc-700">
          <ul className="flex flex-wrap text-lg   text-center text-zinc-200">
            <li className={classNames(hasArticle ? 'block' : 'hidden')}>
              <Link
                href={{ query: { tab: 'article' } }}
                className={classNames(
                  ' inline-block px-2  py-1 -mb-px me-2 hover:text-zinc-200 border-zinc-400',
                  searchParams?.tab === 'article' ? ' border-b-2 ' : 'border-0',
                )}
                role="tab"
                aria-controls="article"
              >
                <Typography theme={{ color: 'base', hoverColor: 'base' }} variants={{ size: 'h6', responsive: true }}>
                  Article
                </Typography>
              </Link>
            </li>
            <li className={classNames(hasSeries ? 'block' : 'hidden')}>
              <Link
                href={{ query: { tab: 'series' } }}
                className={classNames(
                  ' inline-block  px-2  py-1   -mb-px me-2 hover:text-zinc-200 border-zinc-400',
                  searchParams?.tab === 'series' ? ' border-b-2 ' : 'border-0',
                )}
                role="tab"
                aria-controls="series"
              >
                <Typography theme={{ color: 'base', hoverColor: 'base' }} variants={{ size: 'h6', responsive: true }}>
                  Series
                </Typography>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          {curTabQuery === 'article' && (
            <section
              className={classNames(
                ' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-12  ',
                // ' gap-12 gap-y-16',
              )}
            >
              {articleList.map((node) => (
                <ArticleCard key={node.path} node={node} />
              ))}
            </section>
          )}
          {curTabQuery === 'series' && (
            <section
              className={classNames(
                ' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-12  ',
                // ' gap-12 gap-y-16',
              )}
            >
              {seriesList?.map((node, idx) => <SeriesCard node={node} key={`${node.path}-${idx}`} />)}
            </section>
          )}
          {!curTabQuery && <h1 className=" text-7xl">404</h1>}
        </div>
      </Paper>
    </Container>
  );
};

export default Page;
