import React, { useMemo, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { searchProduct } from "../../Redux/Reducer/ProductSlice";
import "../Search/Search.css";

 function SearchProduct(){
  const [searchValue, setSearchValue] = useState<string>("");
  const products = useSelector((state: any) => state.product.products); 
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    dispatch(searchProduct([newValue]));
  };

  const handleDebouncedChange = useMemo(() => {
    return debounce(handleChange, 300);
  }, [products]);

  return (
    <div className="Search-box">
      <input
        className="Search-input"
        type="text"
        placeholder="Search product"
        onChange={handleDebouncedChange}
      />
    </div>
  );
};

export default SearchProduct;
