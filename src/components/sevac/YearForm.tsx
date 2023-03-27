import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export interface YearFormData {
  year: number
  title: string
}

interface Props {
  formData: YearFormData
  onSubmit: (formData: YearFormData) => void
}

const schema = yup.object().shape({
  year: yup
    .number()
    .typeError('Ingrese un valor numérico')
    .positive()
    .required(),
  title: yup.string().required(),
})

const YearForm: FC<Props> = ({ formData, onSubmit }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<YearFormData>({
    defaultValues: formData,
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (formData) {
      reset(formData)
    }
  }, [formData, reset])

  return (
    <>
      <form id="yearForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Año:</span>
          </label>
          <input
            {...register('year')}
            className={`input-bordered ${
              errors.year ? 'input-error' : 'input-primary'
            } input input-sm w-full max-w-xs`}
          />
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.year && errors.year.message}
            </span>
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Titulo:</span>
          </label>
          <input
            {...register('title')}
            className={`input-bordered ${
              errors.title ? 'input-error' : 'input-primary'
            } input input-sm w-full max-w-xs`}
          />
          <label className="label">
            <span className="label-text-alt text-red-500">
              {errors.title && errors.title.message}
            </span>
          </label>
        </div>
      </form>
    </>
  )
}

export default YearForm
