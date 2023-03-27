import { YearContent } from '@/interfaces/sevac'

interface YearContentContainerProps {
  yearContent: YearContent[]
}

const YearContentContainer = ({ yearContent }: YearContentContainerProps) => {
  return (
    <>
      <div className="place-items-top card rounded-box m-2 grid h-full overflow-auto bg-base-300 p-4">
        {yearContent.map(
          (content) => content.type === 'title' && <>{content.content}</>
        )}
      </div>
    </>
  )
}

export default YearContentContainer
