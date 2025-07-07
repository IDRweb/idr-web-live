import React from 'react';
import Image from 'next/image'
import { BlogArchiveConfig, Config } from '../../utils/Config';
import { PostItems } from '../../utils/Content';
import Link from 'next/link';
import { convertToSlug } from '../../utils/Url';

type IHeroProps = {
  title: string;
  metaTitle: string;
  description: string;
  image?: any;
  pauthor?: any;
  author_image?: any;
  categoryCollection?: [string, PostItems[]][];
};

const Hero = (props: IHeroProps) => {
  return (
    <>
      <div className="BlogHeader">

        {/* <header className="PostHeader">
          <div className="HeaderTxt">
            <h1>{props.title}</h1>
            <div className="PostMeta">
              <Image src={props.author_image ? props.author_image : Config.author_image} alt={props.title} width={50} height={50} />
              <p>{props.description}</p>
            </div>
          </div>
          <div className='PostHeaderImg'>
           <Image src={props.image ? props.image : BlogArchiveConfig.featured_image} alt={props.title} width={1425} height={748} />
          </div>
        </header> */}
        {/* <div className="BlogTags">
          <ul className="BlogTagsInner">
            <li>
              <Link href="/blog" className="gtm_blog_inbound_Link_Blog">
                ← All Posts
              </Link>
            </li>
            {props.categoryCollection && props.categoryCollection.map((elt) => (
              <li key={elt[0]}>
                <Link href="/blog/tags/[name]" as={`/blog/tags/${convertToSlug(elt[0])}`}
                  className="flex justify-between">
                    <div>{elt[0]}</div>

                    <div>{elt[1].length}</div>
                  
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  )
};

export { Hero };