import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'; // Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
import { vsDarkTheme } from './utils/prism';

const Code = ({ children, codeString, className = 'language-js', ...props }) => {
  const language = className.replace(/language-/, '');
  const [key, setKey] = React.useState(`${Math.random() * 7}`);

  if (props['live']) {
    return (
      <div>
        <LiveProvider key={key} code={children.trim()} theme={vsDarkTheme} noInline>
          <div className='flex items-center justify-between'>
            <div>Live JSX Editor</div>
            <div>
              <button onClick={() => setKey((k) => `${k * Math.random()}`)}>Reset</button>
            </div>
          </div>
          <div
            style={{
              paddingRight: 10,
              paddingLeft: 10,
            }}>
            <LiveEditor />
          </div>
          <div>
            <div>
              <div>Live Preview</div>
            </div>
            <div>
              <LiveError
                style={{
                  fontSize: 13,
                  background: '#FED7D7',
                  color: '#9B2C2C',
                  lineHeight: '1.5',
                  margin: -4,
                  padding: 4,
                }}
              />
              <LivePreview />
            </div>
          </div>
        </LiveProvider>
      </div>
    );
  } else {
    return (
      <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
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
  }
};

export default Code;
