import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { links } from '../data/siteMap'

const Breadcrums = () => {
  const location = useLocation();

  const segments = location.pathname.split('/').filter(Boolean);
  const urls = segments.map((_, i) => '/' + segments.slice(0, i + 1).join('/'));
  // console.log(location.pathname);

  return (
    <div className="flex w-max justify-start items-center">
      <Link className="cursor-pointer hover:underline font-semibold dark:text-white" to="/">Inefan</Link>

      {
        (links.every(link => link.to !== location.pathname) && (location.pathname !== "/")) ?
          (<>
            <img src="/rightArrowWhite.svg" className="px-2 opacity-50" alt="breadcrumb separator" />
            <span className='dark:text-white'>Not Found</span>
          </>) :
          urls.map(url => (
            links.map(link => (
              (link.to === url) && (
                <React.Fragment key={link.key}>
                  <img src="/rightArrowWhite.svg" className="px-2 opacity-50" alt="breadcrumb separator" /><Link className="hover:underline dark:text-white" to={link.to}>{link.pageName}</Link>
                </React.Fragment>
              )
            ))
          ))
      }

    </div >
  )
}

export default Breadcrums