import React from 'react'

export const ReportTitle = ({ title, track, highlight, setHighlight }) => {

  return (
    <span track={track} className={`flex w-full cursor-pointer px-4 py-2 rounded-2xl ${highlight === track ? "bg-stone-300 dark:bg-stone-800" : ""}`} onClick={() => setHighlight(track)}>{title}</span>
  )
}

export const ReportContent = ({ title, track, highlight, description, subtitle }) => {

  return (
    <>
      <span track={track} className={`text-3xl font-semibold mb-1 ${highlight === track ? "" : "hidden"}`}>{`${title}`}</span>
      <span className={`text-sm text-stone-500 mb-4 font-medium ${highlight === track ? "" : "hidden"}`}>{subtitle}</span>
      <div className={`mb-2 ${highlight === track ? "" : "hidden"}`}>
        {description}
      </div>
    </>
  )
}