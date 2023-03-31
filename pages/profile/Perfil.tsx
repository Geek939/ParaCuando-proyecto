import BannerBlue from '../../components/banners/BannerBlue';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const ProfilePage: NextPageWithLayout = () => {
  return (
    <div className="h-screen">
      <header className="relative  ">
       <div className='app-banner mt-10 '> <BannerBlue /> </div>
        <article className="absolute top-12 left-0 right-0 mx-auto flex flex-col items-center gap-4 z-30">
          <div className="w-20 h-20 bg-red-500 rounded-full"></div>
          <div className="flex gap-8">
            <button className="py-1 px-4 border-2 border-gray-300 whitespace-nowrap text-gray-500 rounded-full text-lg">
              my votes
            </button>
            <button className="py-1 px-4 border-2 border-gray-300 whitespace-nowrap  text-gray-500 rounded-full text-lg">
              My posts
            </button>
          </div>
        </article>
      </header>
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
