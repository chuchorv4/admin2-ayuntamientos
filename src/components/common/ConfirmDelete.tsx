import { CgDanger } from 'react-icons/cg'
import Modal from './Modal'

interface ConfirmProps {
  showConfirm: boolean
  onOk: () => void
  onClose: () => void
}

const ConfirmDelete = ({ showConfirm, onOk, onClose }: ConfirmProps) => {
  if (!showConfirm) {
    return <></>
  }

  return (
    <>
      <Modal
        buttons={
          <>
            <button className="btn-info btn" onClick={onClose}>
              Cancelar
            </button>
            <button className="btn-error btn" onClick={onOk}>
              Eliminar
            </button>
          </>
        }
        title="Confirmar eliminar"
        icon={<CgDanger className="text-error" size={24} />}
      >
        <p className="text-lg">
          Esta seguro que desea Eliminar el registro?, el proceso no es
          reversible.
        </p>
      </Modal>
    </>
  )
}

export default ConfirmDelete
