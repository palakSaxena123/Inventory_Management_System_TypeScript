import React, { useState } from "react";

interface UseEdit {
  handleEdit: (id: number) => void;
  handleCancelEdit: () => void;
  editIndex: number | null;
  editModelOpen: boolean;
}

const useEdit = (): UseEdit => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editModelOpen, setEditModelOpen] = useState(false);

  const handleEdit = (id: number) => {
    setEditIndex(id);
    setEditModelOpen(true);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditModelOpen(false);
  };

  return {
    handleCancelEdit,
    handleEdit,
    editIndex,
    editModelOpen,
  };
};
export default useEdit;
