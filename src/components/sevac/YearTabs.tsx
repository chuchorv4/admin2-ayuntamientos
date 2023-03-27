import { SEVACContent } from '@/interfaces/sevac'
import { FC, Fragment } from 'react'
import { CgAdd, CgTrash } from 'react-icons/cg'

interface YearTabsProps {
  yearSelected: number
  years: SEVACContent[]
  onYearChange: (year: number) => void
  addYear: () => void
  deleteYear: (year: number) => void
}

const YearTabs: FC<YearTabsProps> = ({
  yearSelected,
  years,
  onYearChange,
  addYear,
  deleteYear,
}) => {
  return (
    <div className="tabs tabs-boxed">
      {years.map((content, index) => (
        <Fragment key={index}>
          <button
            key={`tab-${index}`}
            className={`tab ${yearSelected === index ? 'tab-active' : ''}`}
            onClick={() => onYearChange(index)}
          >
            {content.year}
          </button>
          {yearSelected === index && (
            <button
              key={`btn-del-${index}`}
              className="btn-ghost rounded-lg p-2"
              onClick={() => deleteYear(index)}
            >
              <CgTrash />
            </button>
          )}
        </Fragment>
      ))}
      {
        <button key={'tab-add'} className="btn-ghost tab" onClick={addYear}>
          <CgAdd />
        </button>
      }
    </div>
  )
}

export default YearTabs
