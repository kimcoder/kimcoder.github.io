import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust';
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java';
import classNames from 'classnames';

SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('java', java);

const HIGHLIGHT_REG = /{[\d,-]*}/i;

const CodeBlock = ({ children, className = 'language-js', metastring: meta, title = '', ...props }) => {
  const language = className.replace(/language-/, '');
  const codeTitle = title.replace(/"/g, '');
  const highlightLines =
    Object.keys(props)
      .filter((key) => HIGHLIGHT_REG.test(key))
      .at(0)
      ?.replace(/[{}]/g, '')
      .split(',')
      .map((item) => {
        const [start, end] = item.split('-').map((num) => Number(num));
        const lines = Array.from({ length: end - start + 1 }, (_, i) => start + i);

        return end ? lines : start;
      })
      .flat() ?? [];

  return (
    <>
      {codeTitle && <div className={classNames('code-title', 'py-3 px-4 text-sm')}>{codeTitle}</div>}
      <SyntaxHighlighter
        language={language}
        wrapLines={true}
        className={'code'}
        style={oneLight}
        customStyle={{
          borderRadius: codeTitle ? '0 0 0.75rem 0.75rem' : '0.75rem',
          margin: 0,
          padding: '1rem 0 1rem',
          background: 'var(--code-background-color)',
          color: 'var(--code-block-color)',
        }}
        showLineNumbers={true}
        lineProps={(lineNumber) => {
          const isHighlighted = highlightLines.includes(lineNumber);
          return {
            style: {
              ...(isHighlighted ? { backgroundColor: 'var(--code-line-highlight-color)' } : {}),
              display: 'block',
              padding: '0 1.25rem',
              lineHeight: 1.7,
            },
          };
        }}>
        {children.trim()}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeBlock;
