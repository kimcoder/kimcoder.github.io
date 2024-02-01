import React, { CSSProperties } from 'react';
import SyntaxHighlighter, { Light as SyntaxHighlight } from 'react-syntax-highlighter';
import { github as vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import csharp from 'react-syntax-highlighter/dist/cjs/languages/hljs/csharp';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import rust from 'react-syntax-highlighter/dist/cjs/languages/hljs/rust';
import java from 'react-syntax-highlighter/dist/cjs/languages/hljs/java';
import classNames from 'classnames';

SyntaxHighlight.registerLanguage('csharp', csharp);
SyntaxHighlight.registerLanguage('javascript', javascript);
SyntaxHighlight.registerLanguage('typescript', typescript);
SyntaxHighlight.registerLanguage('json', json);
SyntaxHighlight.registerLanguage('rust', rust);
SyntaxHighlight.registerLanguage('java', java);

const HIGHLIGHT_REG = /{[\d,-]*}/i;

const CodeBlock = ({ children, className = 'language-js', metastring: meta, title = '', ...props }) => {
  const language = className.replace(/language-/, '');
  const codeTitle = title.replace(/"/g, '');
  const borderStyle: CSSProperties = codeTitle
    ? { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }
    : { borderRadius: 12 };
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
        style={vscDarkPlus}
        customStyle={{ ...borderStyle, padding: '1rem 0 1rem' }}
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
