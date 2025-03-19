import React from 'react'
import { useParams } from 'react-router-dom';
import { articles } from '../assets/database';
import NotFound from './404';
import { Link } from 'react-router-dom';

const SingleInsight = () => {
  const { slug } = useParams();

  let article;
  articles.forEach(art => {
    console.log(art.slug);
    if (art.slug === slug) {
      article = art;
      return;
    }
  }
  )


  return (
    <>
      {
        !article ? <NotFound /> :
          <div className="flex flex-col flex-auto px-5 pb-10">
            <div className="flex flex-col size-full max-w-5xl mx-auto">

              {/* Back Button */}
              {/* <Link to="/insights" className='mb-3 w-fit'>Back</Link> */}

              {/* Page Header */}
              <div className="flex flex-col max-w-2xl mx-auto mt-10">
                <span className='font-medium text-sm mb-1 dark:text-stone-400 text-stone-600'>{article.category.toUpperCase()}</span>
                <span className='font-medium text-sm mb-6 dark:text-stone-400 text-stone-600'>{article.date}</span>
                <span className='font-bold team3:text-5xl text-4xl mb-6'>{article.title}</span>
                <span className='team3:text-2xl text-xl mb-14'>{article.subtitle}</span>
              </div>

              {/* Photo */}
              <div className="w-full h-100 overflow-hidden rounded-xl mb-5">
                <img src={article.picture} alt="" className='object-cover size-full' />
              </div>

              {/* Article Content */}
              <div className="flex flex-col max-w-2xl mx-auto mt-10">
                <span className='team3:text-lg text-base mb-14'>{article.content}</span>
              </div>

            </div>
          </div>
      }
    </>
  )
}

export default SingleInsight