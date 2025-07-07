import React, { useState, useEffect } from 'react';
import { PostItems } from '../../utils/Content';
import { BlogCard } from './BlogCard';
import { slugCompute } from '../../utils/SlugCompute';
import { useRouter } from 'next/router';

type ChosenPostsProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
  tagFilter?: string | null;
  locale?: string;
};

const ChosenPosts: React.FC<ChosenPostsProps> = ({ initialPosts, allPosts, tagFilter, locale: propLocale }) => {
  const POSTS_PER_PAGE = 3;
  const router = useRouter();
  const locale = propLocale || router.locale || 'ca';

  const [filteredPosts, setFilteredPosts] = useState<PostItems[]>([]);
  const [currentPosts, setCurrentPosts] = useState<PostItems[]>([]);
  const [offset, setOffset] = useState(POSTS_PER_PAGE);

  // Use the posts from props (which are already filtered by locale from getStaticProps)
  // and update when locale changes (which triggers a page reload)
  useEffect(() => {
    if (tagFilter) {
      const tagFilteredPosts = allPosts.filter(post => post.tags.includes(tagFilter));
      setFilteredPosts(tagFilteredPosts);
      setCurrentPosts(tagFilteredPosts.slice(0, POSTS_PER_PAGE));
      setOffset(POSTS_PER_PAGE);
    } else {
      setFilteredPosts(allPosts);
      setCurrentPosts(allPosts.slice(0, POSTS_PER_PAGE));
      setOffset(POSTS_PER_PAGE);
    }
  }, [tagFilter, allPosts]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + POSTS_PER_PAGE);
    setCurrentPosts(filteredPosts.slice(0, offset + POSTS_PER_PAGE));
  };

  return (
    <>
      <div className="BlogCardGroup">
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
      </div>
      {/* {offset < filteredPosts.length && ( */}
        <div className="LoadMore">
          <button onClick={handleLoadMore}>
            Veure més projectes
          </button>
        </div>
      {/* )} */}
    </>
  );
};

export default ChosenPosts;
