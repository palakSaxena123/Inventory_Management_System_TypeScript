export interface UseDelete {
    handleDelete: (id: number) => void;
    handleCancelDelete: () => void;
    deleteIndex: number;
    deleteModelOpen: boolean;
    handleConfirmDelete: (onConfirm: (id: number) => void) => void;
  }