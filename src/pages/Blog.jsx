import Article from '../components/Article'
import { articles } from '../assets/database'
import BlogFilter from '../components/BlogFilter'
import { useState, useRef } from 'react'

const Blog = () => {

  const [selected, setSelected] = useState([])
  const articleContainerRef = useRef(null)

  const displayArticles = () => {

    // If no filter is selected, display all articles
    if (!selected.length) {
      return articles.map(article =>
        <Article
          key={article.key}
          category={article.category}
          title={article.title}
          picture={article.picture}
          date={article.date}
        />)
    }

    // If filter is selected, display only matching articles
    const filteredArticles = articles.map(article => {
      if (selected.includes(article.category)) {
        return <Article
          key={article.key}
          category={article.category}
          title={article.title}
          picture={article.picture}
          date={article.date}
        />
      }
      else
        return null
    })


    console.log(filteredArticles)
    if (filteredArticles.some((article) => article !== null))
      return filteredArticles
    else
      return <div className='max-w-78 min-w-78 h-full'>No matching articles found.</div>

  }


  return (
    <div className='flex-auto flex justify-start pb-15 px-5'>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* Page Header */}
        <span className='font-semibold text-6xl dark:text-white'>Articles</span>

        {/* Filter */}
        <BlogFilter selected={selected} setSelected={setSelected} />

        {/* Container */}
        <div ref={articleContainerRef} className='grid grid-cols-1 blogMedium:grid-cols-2 blogLarge:grid-cols-3 gap-10'>
          {displayArticles()}
        </div>
      </div>

    </div>
  )
}

export default Blog
