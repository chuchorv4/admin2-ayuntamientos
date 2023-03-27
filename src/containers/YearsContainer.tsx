import ConfirmDelete from '@/components/common/ConfirmDelete'
import Modal from '@/components/common/Modal'
import YearForm, { YearFormData } from '@/components/sevac/YearForm'
import YearTabs from '@/components/sevac/YearTabs'
import { SEVACContent } from '@/interfaces/sevac'
import { useState } from 'react'

interface YearContainerProps {
  addYear: (year: number, title: string) => void
  deleteYear: () => void
  years: SEVACContent[]
  yearSelected: number
  setYearSelected: (yearIndex: number) => void
}

const CURRENT_YEAR = new Date().getFullYear()

const initialStateYearFormData: YearFormData = {
  year: CURRENT_YEAR,
  title: `SEVAC / Ejercicio ${CURRENT_YEAR}`,
}

const YearContainer = ({
  addYear,
  deleteYear,
  years,
  yearSelected,
  setYearSelected,
}: YearContainerProps) => {
  const [showModal, setShowModal] = useState(false)
  const [yearFormData, setYearFormData] = useState(initialStateYearFormData)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)
  const onSubmit = ({ year, title }: YearFormData) => {
    addYear(year, title)
    setShowModal(false)
  }
  return (
    <>
      <YearTabs
        addYear={() => {
          setYearFormData(initialStateYearFormData)
          setShowModal(true)
        }}
        deleteYear={() => setShowConfirmDelete(true)}
        onYearChange={(year) => setYearSelected(year)}
        yearSelected={yearSelected}
        years={years}
      />
      {showModal && (
        <Modal
          buttons={
            <>
              <button className="btn-success btn" type="submit" form="yearForm">
                Agregar
              </button>
            </>
          }
          closeModal={() => setShowModal(false)}
          title="Agregar Año"
        >
          <YearForm formData={yearFormData} onSubmit={onSubmit} />
        </Modal>
      )}
      <ConfirmDelete
        showConfirm={showConfirmDelete}
        onOk={() => {
          deleteYear()
          setShowConfirmDelete(false)
        }}
        onClose={() => setShowConfirmDelete(false)}
      />
    </>
  )
}

export default YearContainer
