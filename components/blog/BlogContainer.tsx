import React, { ReactNode } from 'react';
import { PostItems } from '../../utils/Content';
import { Footer } from '../navigation/Footer';
import MainHeader from '../navigation/Header';

type IMainProps = {
  meta: ReactNode;
  hero?: ReactNode;
  recentPosts?: PostItems[];
  categoryCollection?: [any, PostItems[]][];
  children?: ReactNode;
  locale: string;
};

const BlogContainer = (props: IMainProps) => (
  <>
    {props.meta}

    <div>
      <MainHeader useWhite={true} locale={props.locale} />
    </div>

    <div>
      {props.hero}
      {props.children}
    </div> 

     <Footer locale={props.locale} />
  </>
);

export { BlogContainer };
