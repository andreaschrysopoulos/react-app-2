import React from "react"
import { reports } from "../assets/database"
import { useState, useRef, useEffect } from "react"
import { ReportTitle, ReportContent } from "../components/Report"
import { useSearchParams } from "react-router-dom"
import BlogFilter from '../components/BlogFilter'

const Reports = () => {

  const [selected, setSelected] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ id: reports[0].key })
  const [highlight, setHighlight] = useState(reports.some(report => report.key === searchParams.get('id')) ? searchParams.get('id') : reports[0].key);

  useEffect(() => {
    if (searchParams.get('id') !== highlight)
      setSearchParams({ id: highlight }, { replace: true })
  }, [highlight, setSearchParams])

  return (
    <div className="flex flex-col flex-auto px-5 pb-10">
      <div className="flex flex-col size-full max-w-5xl mx-auto">

        <span className='font-semibold text-6xl text-orange-400 mb-2'>Weekly Reports</span>
        <span className='font-medium text-3xl mb-10'>The weekly reports of the Financial Analysis team presents the stock market performance of various indices and markets</span>

        <BlogFilter selected={selected} setSelected={setSelected}/>
        <table className="mt-5 dark:bg-stone-900 bg-stone-200 rounded-2xl overflow-hidden">
          <thead>
            <tr className="text-left bg-stone-800/60">
              <th className="pl-5 pr-3 py-2.5 font-bold">Name</th>
              <th className="font-bold px-3">Date</th>
              <th className="font-bold px-3">Author</th>
              <th className="font-bold pr-5 pl-3 text-right">File</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-stone-800">
              <td className="pl-5 pr-3 py-3">Weekly Outlook Report 13</td>
              <td className="px-3">24-28 February</td>
              <td className="px-3">Financial Analysis Team</td>
              <td className="pr-5 pl-3 text-right">
                <a className="font-medium transition-colors duration-200 ease-in-out dark:text-blue-500/90 text-blue-500/90 hover:dark:text-blue-400/90 hover:text-blue-600/90" href="">Download</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Reports


// <div className="flex flex-col size-full max-w-5xl mx-auto">

// {/* Page Header */}
// <span className='font-semibold text-6xl text-orange-400 mb-2'>Weekly Reports</span>
// <span className='font-medium text-3xl mb-10'>The weekly reports of the Financial Analysis team presents the stock market performance of various indices and markets</span>


// {/* Two Section Board */}
// <div className="flex size-full">

//   {/* Reports */}
//   <div className="flex flex-col min-w-fit px-[7px] py-[7px] mr-4 font-light dark:bg-stone-900 bg-stone-200 rounded-[16px] dark:text-stone-200 text-stone-900">
//     {reports.map(report =>
//       <ReportTitle title={report.short_title} key={report.key} track={report.key} highlight={highlight} setHighlight={setHighlight} setSearchParams={setSearchParams} />
//     )}
//   </div>

//   {/* Descriptions */}
//   <div className="flex flex-col w-full py-4 px-5 dark:bg-stone-900 bg-stone-200 rounded-[16px]">
//     {
//       reports.map(report =>
//         <ReportContent key={report.key} highlight={highlight} track={report.key} description={report.description} title={report.title} subtitle={report.subtitle} download={report.pdf} />
//       )
//     }

//   </div>
// </div>
// </div>