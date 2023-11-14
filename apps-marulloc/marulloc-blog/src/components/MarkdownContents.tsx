import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

type TProps = {
  markdown: string;
};
const MarkdownContents = ({ markdown }: TProps) => {
  return (
    <div id="observing-target">
      <ReactMarkdown
        className=" text-white [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:mt-6 [&>h2]:mb-4   "
        remarkPlugins={[remarkGfm]}
        components={{
          //  ID 다시 삽입해줘야됨 ;;
          h1: ({ node, ...props }) => (
            <h1
              {...props}
              // id={`h1-${props.children[0]}`}
              className={markdown_styles.h1}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              {...props}
              // id={`h2-${props.children[0]}`}
              className={markdown_styles.h2}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              {...props}
              // id={`h3-${props.children[0]}`}
              className={markdown_styles.h3}
            />
          ),
          h4: ({ node, ...props }) => (
            <h4
              {...props}
              // id={`h4-${props.children[0]}`}
              className={markdown_styles.h4}
            />
          ),
          h5: ({ node, ...props }) => (
            <h5
              {...props}
              // id={`h5-${props.children[0]}`}
              className={markdown_styles.h5}
            />
          ),
          h6: ({ node, ...props }) => (
            <h6
              {...props}
              // id={`h6-${props.children[0]}`}
              className={markdown_styles.h6}
            />
          ),
          p: ({ node, ...props }) => <p {...props} className={markdown_styles.p} />,
          a: ({ node, ...props }) => <a {...props} className={markdown_styles.a} />,
          blockquote: ({ node, ...props }) => <blockquote {...props} className={markdown_styles.blockquote} />,
          pre: ({ node, ...props }) => <pre {...props} className={markdown_styles.pre} />,
          hr: ({ node, ...props }) => <hr {...props} className={markdown_styles.hr} />,
          ul: ({ node, ...props }) => <ul {...props} className={markdown_styles.ul} />,
          ol: ({ node, ...props }) => <ol {...props} className={markdown_styles.ol} />,
          table: ({ node, ...props }) => <table {...props} className={markdown_styles.table} />,
          img: ({ node, ...props }) => <img {...props} className={markdown_styles.img} />,
          // code: ({ node, ...props }) => <code {...props} className={markdown_styles.code} />,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={materialDark}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            );
          },
          // img: (image) => (
          //   <Image
          //     src={image.src || ""}
          //     alt={image.alt || "파일을 찾을 수 없습니다."}
          //     width={500}
          //     height={300}
          //     className={markdown_styles.img}
          //   />
          // ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContents;
const classComposer = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

const markdown_styles = {
  h1: classComposer("text-4xl font-bold mt-0 mb-2 border-b  italic"),
  h2: classComposer("text-3xl font-bold mt-0 mb-2 "),
  h3: classComposer("text-2xl font-bold mt-0 mb-2  "),
  h4: classComposer("text-xl font-bold mt-0 mb-2  "),
  h5: classComposer("text-lg font-bold mt-0 mb-2  "),
  h6: classComposer("text-lg font-bold mt-0 mb-2  "),
  p: classComposer(" mt-0 mb-4 "),
  a: classComposer(" text-blue-500 hover:text-blue-600 cursor-pointer"),
  blockquote: classComposer(
    "border-gray-300 border-l-4 font-normal italic my-8 pl-6 text-gray-400 bg-gray-800 py-2 text-lg [&>p]:m-0",
  ),
  code: classComposer("bg-gray-700  p-1 py-0 max-w-full overflow-auto rounded-sm text-sm text-red-400 inline-flex"),
  pre: classComposer("bg-gray-700 px-2 py-2 w-full overflow-auto rounded-md"),
  hr: classComposer("border-b border-gray-300 my-12 rounded-full"),
  ul: classComposer("list-disc   my-1 ml-4"),
  ol: classComposer("list-decimal   my-1 ml-4"),
  table: classComposer(
    "w-full text-white mb-4 p-0 border-collapse border border-red-600",
    "[&>tr]:border-t [&>tr]:border-gray-500 [&>tr]:bg-white [&>tr]:m-0 [&>tr]:p-0 [&>tr:nth-child(2n)]:bg-gray-800",
    "[&>*>tr]:border-t [&>*>tr]:border-gray-500 [&>*>tr]:bg-gray-600 [&>*>tr]:m-0 [&>*>tr]:p-0 [&>*>tr:nth-child(2n)]:bg-gray-800",
    "[&>th]:font-bold [&>th]:border [&>th]:bg-gray-900 [&>th]:border-gray-500 [&>th]:text-left [&>th]:m-0 [&>th]:p-1 [&>th:first-child]:mt-0 [&>th:last-child]:mb-0",
    "[&>*>th]:font-bold [&>*>th]:border [&>*>th]:bg-gray-900 [&>*>th]:border-gray-500 [&>*>th]:text-left [&>*>th]:m-0 [&>*>th]:p-1 [&>*>th:first-child]:mt-0 [&>*>th:last-child]:mb-0",
    "[&>*>*>th]:font-bold [&>*>*>th]:border [&>*>*>th]:bg-gray-900 [&>*>*>th]:border-gray-500 [&>*>*>th]:text-left [&>*>*>th]:m-0 [&>*>*>th]:p-1 [&>*>*>th:first-child]:mt-0 [&>*>*>th:last-child]:mb-0",
    "[&>td]:border [&>td]:border-gray-500 [&>td]:text-left [&>td]:p-1 [&>td:first-child]:mt-0 [&>td:last-child]mb-0:",
    "[&>*>td]:border [&>*>td]:border-gray-500 [&>*>td]:text-left [&>*>td]:p-1 [&>*>td:first-child]:mt-0 [&>*>td:last-child]mb-0:",
    "[&>*>*>td]:border [&>*>*>td]:border-gray-500 [&>*>*>td]:text-left [&>*>*>td]:p-1 [&>*>*>td:first-child]:mt-0 [&>*>*>td:last-child]mb-0",
  ),
  img: classComposer("rounded-md "),
};
