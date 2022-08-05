import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { vsDarkTheme } from './utils/prism';

const Code = ({ children, codeString, className = 'language-js', ...props }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={vsDarkTheme} noInline>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className + ' bg-gray-50 pb-4 pt-4 pr-4 overflow-scroll'}
          style={{ ...style, border: '1px solid #eee', fontSize: 13, lineHeight: '1.5' }}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({
                line,
                key: i,
              })}>
              {tokens.length > 1 ? (
                <span aria-hidden='true' className='select-none text-gray-300 text-right w-5 inline-block mx-2'>
                  {i + 1}
                </span>
              ) : (
                <span className='mx-2 w-5' />
              )}{' '}
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({
                    token,
                    key,
                  })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
