import React, { useState, useEffect } from 'react';
import { PostItems } from '../../utils/Content';
import { BlogCard } from './BlogCard';
import { slugCompute } from '../../utils/SlugCompute';
import { useRouter } from 'next/router';

const Flickity = require('react-flickity-component');
const flickityOptions = {
  initialIndex: 1,
  wrapAround: true,
  autoPlay: 4000
};

type RecentPostsProps = {
  allPosts: PostItems[];
  locale?: string;
};

const RecentPosts: React.FC<RecentPostsProps> = ({ allPosts, locale: propLocale }) => {

  const POSTS_PER_PAGE = 20;
  const router = useRouter();
  const locale = propLocale || router.locale || 'ca';

  const [currentPosts, setCurrentPosts] = useState<PostItems[]>(allPosts.slice(0, POSTS_PER_PAGE));

  // Use the posts from props (which are already filtered by locale from getStaticProps)
  // and update when locale changes (which triggers a page reload)
  useEffect(() => {
    setCurrentPosts(allPosts.slice(0, POSTS_PER_PAGE));
  }, [allPosts]);

  return (
    <>
       <div>
            <Flickity
            className={'news-carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
            >  
              {currentPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  image={post.image}
                  slug={slugCompute(post.slug)}
                  tags={post.tags}
                  showDescription={true}
                  locale={locale}
                />
              ))}
      </Flickity>
      </div>
    </>
  );
};

export default RecentPosts;