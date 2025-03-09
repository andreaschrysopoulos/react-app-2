import React from "react"
import { reports } from "../assets/database"
import { useState, useRef, useEffect } from "react"
import { ReportTitle, ReportContent } from "../components/Report"
import { useSearchParams } from "react-router-dom"

const Reports = () => {

  const [searchParams, setSearchParams] = useSearchParams({ id: reports[0].key })
  const [highlight, setHighlight] = useState(reports.some(report => report.key === searchParams.get('id')) ? searchParams.get('id') : reports[0].key);

  useEffect(() => {
    if (searchParams.get('id') !== highlight)
      setSearchParams({ id: highlight }, { replace: true })
  }, [highlight, setSearchParams])

  return (
    <div className="flex flex-auto px-5 pb-10">

      <div className="flex flex-col size-full max-w-5xl mx-auto">

        {/* Page Header */}
        <span className='font-semibold text-6xl'>Reports</span>

        {/* Two Section Board */}
        <div className="mt-10 flex size-full">

          {/* Reports */}
          <div className="flex flex-col min-w-fit text-sm p-2 mr-3 dark:bg-stone-900 bg-stone-200 rounded-3xl dark:text-stone-200 text-stone-900">
            {reports.map(report =>
              <ReportTitle title={report.short_title} key={report.key} track={report.key} highlight={highlight} setHighlight={setHighlight} setSearchParams={setSearchParams} />
            )}
          </div>

          {/* Descriptions */}
          <div className="flex flex-col w-full px-7 py-5 dark:bg-stone-900 bg-stone-200 rounded-3xl">
            {
              reports.map(report =>
                <ReportContent key={report.key} highlight={highlight} track={report.key} description={report.description} title={report.title} subtitle={report.subtitle} download={report.pdf} />
              )
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports