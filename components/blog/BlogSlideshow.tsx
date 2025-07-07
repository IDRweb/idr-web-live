// import Link from 'next/link';
// import Image from 'next/image';
// import { slugCompute } from '../../utils/SlugCompute';

// const Flickity = require('react-flickity-component');
// const flickityOptions = {
//   initialIndex: 0,
//   wrapAround: true,
//   autoPlay: 0
// };

// type IBlogPostProps = {
//   title: string;
//   description: string;
//   date: string;
//   image: string;
//   tags: string[];
//   slug: string;
// };

// type IBlogSlideProps = {
//   posts: IBlogPostProps[];
// };

// const BlogSlideshow = (props: IBlogSlideProps) => {

//   const truncateString = (str: string, num: number) => {
//     if (str.length > num) {
//       return `${str.slice(0, num)}....`;
//     }
//     return str;
//   };

//   return (
//     <>
//       <div>
//         <Flickity
//             className={'blog-carousel'}
//             elementType={'div'}
//             options={flickityOptions}
//             disableImagesLoaded={false}
//             reloadOnUpdate
//             static
//         >
//           {props.posts.map((slide) => (
//             <Link key={slide.slug} href="/post/[slug]" as={`/post/${slugCompute(slide.slug)}`}>
//               <div  className="BlogSlideWrap">
//                 <div className="BlogSlideInner">
//                   <div className="SideImg">
//                     <Image alt={slide.title} src={slide.image} width={550} height={550} />
//                   </div>
//                   <div className="SideTxt">
//                     <p>{slide.date}</p>
//                     <h4>{slide.title}</h4>
//                     <p>{truncateString(slide.description, 100)}</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </Flickity>
//       </div>
//     </>
//   );
// };

// export { BlogSlideshow };
