import React from 'react';
import Link from 'next/link';
import { dateTimeReadable } from '../../utils/DateTimeReadable';
import { useRouter } from 'next/router';

type IBlogCardProps = {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  tags: string[];
  showDescription?: boolean;
  locale?: string;
};

const BlogCard = (props: IBlogCardProps) => {
  const router = useRouter();
  const locale = props.locale || router.locale || 'ca';

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return `${str.slice(0, num)}....`;
    }
    return str;
  };

  // Always use the provided image, which is now always set to the correct relative path
  const imageUrl = props.image && props.image.trim() !== '' ? props.image : undefined;
  const BlogCardImgBG = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};

  return (
    <article className="">
      <Link href={`/${locale}/post/${props.slug}`} className="BlogCardWrap">
        <div className="BlogCardTop" style={BlogCardImgBG}>
          <div className="CategoryTag">
            {props.tags.map((tag) => (
              <div key={tag}>
                {`${tag}`}
              </div>
            ))}
          </div>
        </div>

        <div className="BlogCard">
          <div className="BlogCardTxt">
            {/* <p className="BlogCardSub">
              {dateTimeReadable(props.date)}
            </p> */}
            <h6>{props.title}</h6>
            {props.showDescription !== false && (
            <p className='Description'>{truncateString(props.description, 150)}</p>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export { BlogCard };
