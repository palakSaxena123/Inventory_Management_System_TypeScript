import { useState } from "react";
import { UseDelete } from "../Types/UseDelete";

export const useDelete = (): UseDelete => {
  const [deleteModelOpen, setDeleteModelOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setDeleteIndex(id);
    setDeleteModelOpen(true);
  };

  const handleCancelDelete = () => {
    setDeleteIndex(null);
    setDeleteModelOpen(false);
  };
    
  const handleConfirmDelete = (onConfirm: (id: number) => void) => {
    if (deleteIndex !== null) {
      onConfirm(deleteIndex);
      setDeleteIndex(null);
      setDeleteModelOpen(false);
    }
  };
  return {
    handleDelete,
    handleCancelDelete,
    deleteModelOpen,
    deleteIndex: deleteIndex ?? 0,
    handleConfirmDelete,
  };
};

