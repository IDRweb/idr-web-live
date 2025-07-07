import React, { ReactNode } from 'react';

type IContentBorderProps = {
  children: ReactNode;
};

const ContentBorder = (props: IContentBorderProps) => (
  <div className="ContentBorder">{props.children}</div>
);

export { ContentBorder };