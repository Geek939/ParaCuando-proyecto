import React from 'react';
import { Footer } from '../navigation/footer/Footer';
import Header from '../navigation/header/Header';

interface ILayout {
  children: React.ReactNode;
  classMain?:string;
}

export const Layout: React.FC<ILayout> = ({ children, classMain }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <main  className={classMain}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
