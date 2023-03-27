import getContentSevac from '@/services/front/getContentSevac'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import updateContentSevac from '@/services/front/updateContentSevac'
import { SEVACContent } from '@/interfaces/sevac'
import YearContainer from '../../containers/YearsContainer'
import YearContentContainer from '@/containers/YearContentContainer'

const ID_QUERY = 'getContentSevac'

const SevacPage: NextPage = () => {
  const queryClient = useQueryClient()
  const { data: sevac } = useQuery([ID_QUERY], () => getContentSevac())
  const { mutate } = useMutation(updateContentSevac, {
    onSuccess: (dataUpdated) => {
      queryClient.setQueryData([ID_QUERY], dataUpdated)
    },
  })

  const [yearSelected, setYearSelected] = useState(0)
  const [yearContentSelected, setYearContentSelected] = useState<SEVACContent>()

  const addYear = (year: number, title: string) => {
    if (!sevac) return
    const newYear: SEVACContent = {
      year: `${year}`,
      content: [{ type: 'title', content: title }],
    }
    mutate(
      { ...sevac, content: [...sevac.content, newYear] },
      {
        onSuccess: (dataUpdated) => {
          setYearSelected(dataUpdated.content.length - 1)
        },
      }
    )
  }

  const deleteYear = () => {
    if (!sevac) return
    mutate({
      ...sevac,
      content: [...sevac.content.filter((_, index) => index != yearSelected)],
    })
    setYearSelected(0)
  }

  useEffect(() => {
    if (sevac) {
      setYearContentSelected(sevac.content[yearSelected])
    }
  }, [sevac, yearSelected])

  if (!sevac) {
    return <></>
  }

  return (
    <>
      <YearContainer
        addYear={addYear}
        deleteYear={deleteYear}
        setYearSelected={setYearSelected}
        yearSelected={yearSelected}
        years={sevac.content}
      />
      {yearContentSelected && (
        <YearContentContainer yearContent={yearContentSelected.content} />
      )}
    </>
  )
}

export default SevacPage
