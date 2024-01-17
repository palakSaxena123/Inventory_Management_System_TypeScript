import { useState } from "react";

interface UseDelete {
  handleDelete: (id: number) => void;
  handleConfirmDelete: () => void;
  handleCancelDelete: () => void;
  deleteIndex: number;
  deleteModelOpen: boolean;
}

export const useDelete = (): UseDelete => {
  const [deleteModelOpen, setDeleteModelOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setDeleteIndex(id);
    setDeleteModelOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteIndex === null) {
      throw new Error("Invalid deleteIndex");
    }
    setDeleteModelOpen(false);
  };

  const handleCancelDelete = () => {
    setDeleteIndex(null);
    setDeleteModelOpen(false);
  };

  return {
    handleDelete,
    handleConfirmDelete,
    handleCancelDelete,
    deleteModelOpen,
    deleteIndex: deleteIndex ?? 0,
  };
};
