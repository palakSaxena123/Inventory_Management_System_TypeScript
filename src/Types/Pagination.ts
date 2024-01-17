 export interface PaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    totalPage: number;
    postPerPage: number;
  }