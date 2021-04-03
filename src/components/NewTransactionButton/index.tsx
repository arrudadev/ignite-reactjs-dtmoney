import { useState } from "react";

import { Button } from "./styles";

import { NewTransactioModal } from "../NewTransactionModal";

export function NewTransactioButton() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Button 
        type="button"
        onClick={handleOpenNewTransactionModal}
      >
        Nova transação
      </Button>

      <NewTransactioModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}