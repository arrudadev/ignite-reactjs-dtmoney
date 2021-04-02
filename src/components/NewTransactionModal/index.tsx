import Modal from 'react-modal';

import closeSVG from '../../assets/close.svg';

import { Container } from './styles';

interface NewTransactioModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactioModal({ isOpen, onRequestClose }: NewTransactioModalProps) {
  return (
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeSVG} alt="Fechar modal"/>
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
        />

        <input 
          type="number"
          placeholder="Valor"
        />

        <input           
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}