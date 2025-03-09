import React from 'react'

export const ReportTitle = ({ title, track, highlight, setHighlight }) => {

  // console.log("title", highlight, track)
  // console.log("ReportTitle:", { highlight, track, match: highlight === track, types: [typeof highlight, typeof track] });

  return (
    <span track={track} className={`flex w-full cursor-pointer px-4 py-2 rounded-2xl ${highlight === track ? "bg-stone-300 dark:bg-stone-800" : ""}`} onClick={() => setHighlight(track)}>{title}</span>
  )
}

export const ReportContent = ({ title, track, highlight, description, subtitle, download }) => {

  // console.log("content", highlight, track)
  // console.log("ReportContent:", { highlight, track, match: highlight === track, types: [typeof highlight, typeof track] });

  return (
    <>
      <span track={track} className={`text-3xl font-semibold mb-1 ${highlight === track ? "" : "hidden"}`}>{`${title}`}</span>
      <span className={`text-sm text-stone-500 mb-4 font-medium ${highlight === track ? "" : "hidden"}`}>{subtitle}</span>
      <div dangerouslySetInnerHTML={{ __html: description }} className={`mb-6 ${highlight === track ? "" : "hidden"}`} />
      <a className={`transition-colors duration-200 ease-in-out font-medium w-fit dark:text-blue-500/90 text-blue-500/90 hover:dark:text-blue-400/90 hover:text-blue-600/90 ${highlight === track ? "" : "hidden"}`} href={download}>Download Report</a>
    </>
  )
}