import React from 'react';
// import { BlogSlideshow } from '../BlogSlideshow';
import { slugCompute } from '../../utils/SlugCompute';
import { PostItems } from '../../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
};

const BlogHero = (props: IBlogGalleryProps) => (
  <>
    <section className="">
        <div className="">
            <div className="">
                <div className="" data-animate="slide-up">
                    <div className="">
                        <h1><span className="WarmGrad">The Blog</span></h1>
                        <h6>Subtitle</h6>
                    </div>
                    {/* <div className="">
                       <BlogSlideshow posts={props.posts} />
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  </>
);

export { BlogHero };
