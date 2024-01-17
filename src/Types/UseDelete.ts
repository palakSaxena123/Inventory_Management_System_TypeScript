export interface UseDelete {
    handleDelete: (id: number) => void;
    handleCancelDelete: () => void;
    deleteIndex: number;
    deleteModelOpen: boolean;
  }