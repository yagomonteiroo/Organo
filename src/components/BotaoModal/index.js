import './botaoModal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { AiFillPlusCircle } from 'react-icons/ai'

function BotaoModal({abrir, fechar, estadoAtual, children}) {

  return (
    <>
      <AiFillPlusCircle onClick={abrir}  className='btn-add-time' color='#6278F7' size={19}/>

      <Modal show={estadoAtual} onHide={fechar}>
        
        <Modal.Body className='.formulario'>
        {children}
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default BotaoModal;