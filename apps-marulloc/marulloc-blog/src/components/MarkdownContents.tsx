'use client';

import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { COLOR_SET, SCALE_SET } from './Marulloc-UI/theme-config';

type TProps = {
  markdown: string;
};
const MarkdownContents = ({ markdown }: TProps) => {
  return (
    <div id="observing-target">
      <ReactMarkdown
        className={classNames(' text-zinc-400  font-light  ')}
        remarkPlugins={[remarkGfm]}
        components={{
          //  ID 다시 삽입해줘야됨 ;;
          h1: ({ node, ...props }) => <h1 {...props} id={`level-1-${props.children}`} className={markdown_styles.h1} />,
          h2: ({ node, ...props }) => <h2 {...props} id={`level-2-${props.children}`} className={markdown_styles.h2} />,
          h3: ({ node, ...props }) => <h3 {...props} id={`level-3-${props.children}`} className={markdown_styles.h3} />,
          h4: ({ node, ...props }) => <h4 {...props} id={`level-4-${props.children}`} className={markdown_styles.h4} />,
          h5: ({ node, ...props }) => <h5 {...props} id={`level-5-${props.children}`} className={markdown_styles.h5} />,
          h6: ({ node, ...props }) => <h6 {...props} id={`level-6-${props.children}`} className={markdown_styles.h6} />,
          p: ({ node, ...props }) => <p {...props} className={markdown_styles.p} />,
          a: ({ node, ...props }) => <a {...props} className={markdown_styles.a} />,
          blockquote: ({ node, ...props }) => <blockquote {...props} className={markdown_styles.blockquote} />,
          // pre: ({ node, ...props }) => <pre {...props} className={markdown_styles.pre} />,
          hr: ({ node, ...props }) => <hr {...props} className={markdown_styles.hr} />,

          li: ({ node, ...props }) => <li {...props} className={markdown_styles.li} />,
          ul: ({ node, ...props }) => <ul {...props} className={markdown_styles.ul} />,
          ol: ({ node, ...props }) => <ol {...props} className={markdown_styles.ol} />,
          table: ({ node, ...props }) => <table {...props} className={markdown_styles.table} />,
          // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
          img: ({ node, ...props }) => <img {...props} className={markdown_styles.img} />,
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                {...(rest as SyntaxHighlighterProps)}
                PreTag="div"
                language={match[1]}
                style={materialDark}
                className={'rounded-lg bg-zinc-800  '}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={markdown_styles.code}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContents;

const markdown_styles = {
  h1: classNames(SCALE_SET.text.h2, COLOR_SET.text.default.base, 'mt-20 mb-8 scroll-m-24 '),
  h2: classNames(SCALE_SET.text.h3, COLOR_SET.text.default.base, 'mt-16 mb-8 scroll-m-24'),
  h3: classNames(SCALE_SET.text.h4, COLOR_SET.text.default.base, 'mt-12 mb-8 scroll-m-24'),
  h4: classNames(SCALE_SET.text.h5, COLOR_SET.text.default.base, 'mt-8 mb-2'),
  h5: classNames(SCALE_SET.text.h6, COLOR_SET.text.default.base, 'my-4  '),
  h6: classNames(SCALE_SET.text.body1, COLOR_SET.text.default.base, 'my-4'),

  p: classNames(SCALE_SET.text.body2, COLOR_SET.text.default.muted, 'my-4 leading-6  '),
  a: classNames(' text-indigo-400 hover:text-indigo-600 cursor-pointer'),
  blockquote: classNames(
    SCALE_SET.text.body2,
    COLOR_SET.text.default.muted,
    'border-indigo-400 border-l-4 bg-zinc-800 ',
    'my-8 [&>p]:m-0 p-6 py-4 ',
    '[&>h1]:mt-0 [&>h2]:mt-0 [&>h3]:mt-0 [&>h4]:mt-0',
  ),
  hr: classNames('border-b border-zinc-600 border-1 ', 'my-12'),

  li: classNames('my-1 pl-2'),
  ul: classNames('list-disc ml-6 my-2'),
  ol: classNames('list-decimal ml-6 my-2 '),
  table: classNames(
    'w-full text-white mb-4 p-0 border-collapse border border-red-600',
    '[&>tr]:border-t [&>tr]:border-gray-500 [&>tr]:bg-white [&>tr]:m-0 [&>tr]:p-0 [&>tr:nth-child(2n)]:bg-gray-800',
    '[&>*>tr]:border-t [&>*>tr]:border-gray-500 [&>*>tr]:bg-gray-600 [&>*>tr]:m-0 [&>*>tr]:p-0 [&>*>tr:nth-child(2n)]:bg-gray-800',
    '[&>th]:font-bold [&>th]:border [&>th]:bg-gray-900 [&>th]:border-gray-500 [&>th]:text-left [&>th]:m-0 [&>th]:p-1 [&>th:first-child]:mt-0 [&>th:last-child]:mb-0',
    '[&>*>th]:font-bold [&>*>th]:border [&>*>th]:bg-gray-900 [&>*>th]:border-gray-500 [&>*>th]:text-left [&>*>th]:m-0 [&>*>th]:p-1 [&>*>th:first-child]:mt-0 [&>*>th:last-child]:mb-0',
    '[&>*>*>th]:font-bold [&>*>*>th]:border [&>*>*>th]:bg-gray-900 [&>*>*>th]:border-gray-500 [&>*>*>th]:text-left [&>*>*>th]:m-0 [&>*>*>th]:p-1 [&>*>*>th:first-child]:mt-0 [&>*>*>th:last-child]:mb-0',
    '[&>td]:border [&>td]:border-gray-500 [&>td]:text-left [&>td]:p-1 [&>td:first-child]:mt-0 [&>td:last-child]mb-0:',
    '[&>*>td]:border [&>*>td]:border-gray-500 [&>*>td]:text-left [&>*>td]:p-1 [&>*>td:first-child]:mt-0 [&>*>td:last-child]mb-0:',
    '[&>*>*>td]:border [&>*>*>td]:border-gray-500 [&>*>*>td]:text-left [&>*>*>td]:p-1 [&>*>*>td:first-child]:mt-0 [&>*>*>td:last-child]mb-0',
  ),
  img: classNames('rounded-md  mx-auto'),

  // pre: classNames("bg-zinc-700 w-full overflow-auto rounded-md p-4 my-8 "),
  code: classNames('bg-zinc-700 max-w-full overflow-auto rounded-md text-sm  inline-flex p-0.5 px-1.5 text-red-400'),
};
