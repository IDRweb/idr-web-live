import React, { useState, useEffect } from 'react';
import { PostItems } from '../../utils/Content';
import { BlogCard } from './BlogCard';
import { slugCompute } from '../../utils/SlugCompute';
import { useRouter } from 'next/router';

type BlogArchiveProps = {
  initialPosts: PostItems[];
  allPosts: PostItems[];
  tagFilter?: string | null;
  locale?: string;
};

const BlogArchive: React.FC<BlogArchiveProps> = ({ initialPosts, allPosts, tagFilter, locale }) => {
  const POSTS_PER_PAGE = 9;
  const router = useRouter();
  const { locale: routerLocale } = router;

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
      {offset < filteredPosts.length && (
        <div className="LoadMore">
          <div className='SmallBtnWrap'>
          <button onClick={handleLoadMore}>
            Més projectes destacats
          </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogArchive;

// -------- PAGINATION BLOGARCHIVE --------------

// import React from 'react';
// import { PostItems } from '../../utils/Content';
// import { slugCompute } from '../../utils/SlugCompute';
// import { BlogCard } from './BlogCard';
// import { Pagination, IPaginationProps } from './Pagination';

// export type IBlogGalleryProps = {
//   posts: PostItems[];
//   pagination?: IPaginationProps;
// };

// const BlogArchive = (props: IBlogGalleryProps) => (
//   <>
//     <div className="BlogCardGroup">
//       {props.posts.map((elt, index) => (
//         <BlogCard
//           key={elt.slug}
//           title={elt.title}
//           description={elt.description}
//           date={elt.date}
//           image={elt.image}
//           slug={slugCompute(elt.slug)}
//           tags={elt.tags}
//           index={index}
//         />
//       ))}
//     </div>

//     {props.pagination && (
//       <Pagination previous={props.pagination.previous} next={props.pagination.next} />
//     )}
//   </>
// );