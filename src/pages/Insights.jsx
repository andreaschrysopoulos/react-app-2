import Article from '../components/Article'
import { articles } from '../assets/database'
import BlogFilter from '../components/BlogFilter'
import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Insights = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()

  const [selected, setSelected] = useState(() => {
    return searchParams.getAll("category").filter(Boolean)
  })
  const articleContainerRef = useRef(null)

  useEffect(() => {
    if (selected.length > 0) {
      setSearchParams({ category: selected }, { replace: true })
    } else {
      setSearchParams({}, { relative: true })
    }
  }, [selected, setSearchParams])


  const displayArticles = () => {

    // If no filter is active, display all articles
    if (!selected.length) {
      return articles.map(article =>
        <Article
          key={article.key}
          category={article.category.toUpperCase()}
          title={article.title}
          picture={article.picture}
          date={article.date}
          slug={article.slug}
        />)
    }

    // If filter is active, put matching articles in variable
    const filteredArticles = articles.map(article => {
      if (selected.includes(article.category)) {
        return <Article
          key={article.key}
          category={article.category.toUpperCase()}
          title={article.title}
          picture={article.picture}
          date={article.date}
          slug={article.slug}
        />
      }
      else
        return null
    })

    // If variable is not made of null values, matching articles were found, so display them.
    // Otherwise show "No articles found."
    if (filteredArticles.some((article) => article !== null))
      return filteredArticles
    else
      return <div className='max-w-79 min-w-79 h-full text-lg opacity-80'>No matching articles found.</div>
  }


  return (
    <div className='flex-auto flex flex-col justify-start pb-15 px-5'>
      <div className="max-w-5xl mx-auto flex flex-col w-70 team2:w-168 team3:w-min">

        {/* Transition Div */}
        <div className={`flex flex-col transition-discrete duration-400 ${isLoaded ? "opacity-100" : "translate-y-4 opacity-0"}`}>
          {/* Page Header */}
          <span className='font-semibold team3:text-6xl text-5xl mb-2'>Inefan Insights</span>
          <span className='team3:text-3xl text-2xl team3:mb-10 team2:mb-8 mb-5 dark:text-stone-400 text-stone-500 w-fit'>Explore insightful articles and thought-provoking content curated by our editorial team, covering a wide range of topics and perspectives.</span>
        </div>


        <div className={`transition-opacity duration-400 ${isLoaded ? "" : "opacity-0"}`}>
          {/* Filter */}
          <BlogFilter selected={selected} setSelected={setSelected} />
        </div>


        {/* Articles Container */}
        <div ref={articleContainerRef} className={`mt-10 grid grid-cols-1 team2:grid-cols-2 team3:grid-cols-3 gap-10 min-w-70 team2:min-w-168 team3:min-w-257 transition-opacity duration-400 ${isLoaded ? "" : "opacity-0"}`}>
          {displayArticles()}
        </div>
      </div>

    </div>
  )
}

export default Insights
