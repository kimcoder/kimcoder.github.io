import React from 'react';
import { useIsMobile } from 'components/useIsMobile';
import { Nav } from 'components/Nav';
import { Sticky } from 'components/Sticky';
import markdown from 'styles/markdown.module.css';

export default function NotFound() {
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        {isMobile ? (
          <>
            <Nav />
          </>
        ) : (
          <Sticky>
            <Nav />
          </Sticky>
        )}
        <div className='block'>
          <>
            <div className='content container mx-auto pb-12 pt-6'>
              <div className='relative flex'>
                <div className={markdown['markdown'] + ' docs w-full text-center'}>
                  <h1>Snap! We couldn't find that page.</h1>
                  <p>Please use the menu to find what you're looking for.</p>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
