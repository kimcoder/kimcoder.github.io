import React from 'react';
import SyntaxHighlighter, { Light as SyntaxHighlight } from 'react-syntax-highlighter';
import { atomDark as vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp';

SyntaxHighlight.registerLanguage('csharp', csharp);

const CodeBlock = ({ children, codeString, className = 'language-js', ...props }) => {
  const language = className.replace(/language-/, '');
  const highlightLines = [];
  console.log('codeString,', codeString, language, children, props, highlightLines);
  return (
    <SyntaxHighlighter
      language={language}
      wrapLines={true}
      className='code'
      style={vscDarkPlus}
      customStyle={{ borderRadius: 12, fontSize: '13px', lineHeight: 1.5 }}
      showLineNumbers={true}
      /*lineProps={(lineNumber) => {
        const isHighlighted = highlightLines.includes(lineNumber);
        return {
          style: {
            ...(isHighlighted ? { backgroundColor: 'var(--rp-code-line-highlight-color)' } : {}),
            display: 'block',
            padding: '0 1.25rem',
          },
        };
      }}*/
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
