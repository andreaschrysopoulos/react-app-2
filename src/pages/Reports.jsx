import React from "react"
import { reports } from "../assets/database"
import { useState, useRef, useEffect } from "react"
// import { ReportTitle, ReportContent } from "../components/Report"
// import { useSearchParams } from "react-router-dom"
import BlogFilter from '../components/BlogFilter'

const Reports = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const [selected, setSelected] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams({ id: reports[0].key })
  // const [highlight, setHighlight] = useState(reports.some(report => report.key === searchParams.get('id')) ? searchParams.get('id') : reports[0].key);

  // useEffect(() => {
  //   if (searchParams.get('id') !== highlight)
  //     setSearchParams({ id: highlight }, { replace: true })
  // }, [highlight, setSearchParams])

  return (
    <div className="flex flex-col flex-auto px-5 pb-10">
      <div className="flex flex-col size-full max-w-5xl mx-auto">

        {/* Transition Div */}
        <div className={`flex flex-col transition-all duration-400 ${isLoaded ? "opacity-100" : "translate-y-4 opacity-0"}`}>
          {/* Page Header */}
          <span className='font-semibold team3:text-6xl text-5xl mb-2'>Weekly Reports</span>
          <span className='team3:text-3xl text-2xl mb-10 dark:text-stone-400 text-stone-500'>The weekly reports of the Financial Analysis team presents the stock market performance of various indices and markets</span>

        </div>

        {/* Blog Filter */}
        <div className={`transition-opacity duration-400 ${isLoaded ? "" : "opacity-0"}`}>
          <BlogFilter selected={selected} setSelected={setSelected} />
        </div>

        {/* Table of Reports */}
        <table className={`mt-5 dark:bg-stone-900 bg-stone-200 rounded-2xl overflow-hidden hidden team2:table team3:text-base text-sm transition-opacity duration-400 ${isLoaded ? "" : "opacity-0"}`}>

          {/* Table Head */}
          <thead>
            <tr className="text-left dark:bg-stone-800/60 bg-stone-300/60">
              <th className="team3:pl-5 pl-3 team3:pr-3 pr-2 py-2 team3:py-2.5 font-bold">Name</th>
              <th className="font-bold px-2 team3:px-3 py-2 team3:py-2.5">Time Period</th>
              <th className="font-bold px-2 team3:px-3 py-2 team3:py-2.5">Date Uploaded</th>
              <th className="font-bold px-2 team3:px-3 py-2 team3:py-2.5">Author</th>
              <th className="font-bold team3:pr-5 pr-3 team3:pl-3 pl-2 text-right y-2 team3:py-2.5">PDF</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {
              reports.map(report => (
                <tr className="hover:dark:bg-stone-800 hover:bg-stone-300 border-t border-t-stone-300 dark:border-t-stone-800">
                  <td className="team3:pl-5 pl-3 team3:pr-3 pr-2 team3:py-3 py-2">{report.title}</td>
                  <td className="px-2 team3:px-3">{report.subtitle}</td>
                  <td className="px-2 team3:px-3">{report.date}</td>
                  <td className="px-2 team3:px-3">Financial Analysis Team</td>
                  <td className="team3:pr-5 pr-3 team3:pl-3 pl-2 text-right">
                    <a className="font-medium transition-colors duration-200 ease-in-out dark:text-blue-500/90 text-blue-500/90 hover:dark:text-blue-400/90 hover:text-blue-600/90" href={report.pdf} target="_blank">View</a>
                  </td>
                </tr>
              )
              )
            }
          </tbody>

        </table>

        <div className="mt-5 flex flex-col gap-5 team2:hidden">
          {
            reports.map(report => (
              <a href={report.pdf} className="transition-all duration-200 ease-in-out rounded-3xl
              bg-stone-200 hover:bg-stone-300/70
              dark:bg-stone-900 dark:hover:bg-stone-800/70" target="_blank">
                <div className="flex flex-col w-full p-6 ">
                  <div className="text-xl font-medium">{report.title}</div>

                  <div className="mt-5 flex justify-between items-center gap-5">
                    <div className="text-stone-500 dark:text-stone-400">{report.subtitle}</div>
                    <div className="w-fit transition-all duration-200 ease-in-out dark:text-blue-500/90 text-blue-500/90 hover:dark:text-blue-400/90 hover:text-blue-600/90 px-4 py-1 bg-stone-300/80 hover:bg-stone-400/22
                    dark:bg-stone-800/80 dark:hover:bg-stone-700/30 rounded-full">View</div>
                  </div>

                </div>
              </a>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Reports