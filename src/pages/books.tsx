import { Banner } from 'components/Banner';
import { Footer } from 'components/Footer';
import { useIsMobile } from 'components/useIsMobile';
import { SidebarMobile } from 'components/SidebarMobile';
import { Nav } from 'components/Nav';
import { Seo } from 'components/Seo';
import { Sticky } from 'components/Sticky';
import { Sidebar } from 'components/Sidebar';
import SidebarRoutes from 'components/SidebarRoutes';

export default function Books({ posts }: any) {
  const isMobile = useIsMobile();

  return (
    <>
      <Seo
        title='Books'
        description='스터디 모임, 그리고 개인적으로 읽었던 일부 책들의 내용을 정리한 글들입니다.'
        keywords='kimcoder, book, book study, frontend engineer'
      />
      <div className='h-full min-h-full'>
        <Banner />
        {isMobile ? (
          <>
            <Nav />
            <Sticky shadow>
              <SidebarMobile>
                <SidebarRoutes isMobile={true} />
              </SidebarMobile>
            </Sticky>
          </>
        ) : (
          <Sticky>
            <Nav />
          </Sticky>
        )}
        <Seo title='Books' description='스터디 모임, 그리고 개인적으로 읽었던 일부 책들의 내용을 정리한 글들입니다.' />
        <div className='container mx-auto bg-white px-4 pt-6'>
          <div className='relative flex'>
            {!isMobile && (
              <Sidebar fixed>
                <SidebarRoutes isMobile={false} />
              </Sidebar>
            )}
            <div>
              <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl '>
                Books 📚
              </h1>
              <div className='lg mt-3 sm:mt-4 lg:grid lg:items-center lg:gap-5'>
                <p className='text-xl leading-7 text-gray-500'>
                  스터디 모임, 그리고 개인적으로 읽었던 일부 책들의 내용을 정리한 글들입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}