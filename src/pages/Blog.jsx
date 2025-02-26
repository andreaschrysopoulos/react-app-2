import Article from '../components/Article'
import { articles } from '../assets/database'

const Blog = () => {
  return (
    <div className='flex-auto mx-auto flex pb-15 px-5'>

      <div className="max-w-5xl flex flex-col gap-10">
        {/* Page Header */}
        <span className='font-semibold text-6xl dark:text-white'>Articles</span>
        {/* Article Container */}
        <div className='grid grid-cols-1 blogMedium:grid-cols-2 blogLarge:grid-cols-3 gap-8'>
          {articles.map(article => (
            <Article
              key={article.key}
              category={article.category}
              title={article.title}
              picture={article.picture}
              date={article.date}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Blog
