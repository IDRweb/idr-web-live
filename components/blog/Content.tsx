import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="ContentBorder">
    <div className="content BlogContent">
      <div>
        <div className="blog-post" />
      </div>
      <div className="BlogContentInner">
        {props.children}
      </div>
    </div>
  </div>
);

export { Content };
