import * as React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteProduct } from "../../Redux/Reducer/ProductSlice";
import ViewProducts from "../Model/ViewModel";
import DeleteModel from "../Model/DeleteModel";
import SearchProduct from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import { useDelete } from "../../Hooks/useDelete";
import { Product } from "../../Types/Product";
import { RootState } from "../../Types/Product";

function Table() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.product.products);
  const searchTerm = useSelector(
    (state: RootState) => state.product.searchTerm
  );

  const [newProduct, setNewProduct] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);
  const IndexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = IndexOfLastPage - postPerPage;
  const Currentproducts = newProduct.slice(indexOfFirstPage, IndexOfLastPage);

  useEffect(() => {
    if (searchTerm) {
      const searchString = searchTerm.join(' '); 
      const filteredProducts = products.filter((product) =>
        product.name.includes(searchString)
      );
      setNewProduct(filteredProducts);
    } else {
      setNewProduct(products);
    }
  }, [searchTerm, products]);

  const {
    handleDelete,handleCancelDelete, deleteIndex, deleteModelOpen} = useDelete();
 

  const getProductById = (id: number) => {
    const product = products.find((product) => product.id === id);
    return product;
  };

  const handleConfirmDeleteAction = (id: number) => {
    if (id !== null) {
      const productToDelete = getProductById(id);

      if (productToDelete) {
        const { weight, quantity } = productToDelete;
        dispatch(deleteProduct({ id, weight, quantity }));
        toast.error("Product deleted successfully");
        handleCancelDelete();
      } else {
        console.error("Product not found");
      }
    }
  };

   const handleEdit = (productId: number) => {
    const productToEdit = newProduct.find(
      (product) => product.id === productId
    );

    if (productToEdit) {
      navigate(`/addproduct/${productId}`, { state: { productToEdit } });
    } else {
      toast.error("Product not found");
    }
  };

  const handleOpenView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className=" flex items-center justify-around pb-6">
        <div>
          <h2 className="text-gray-600 font-semibold">Product List</h2>
          <span className="text-xs">All products item</span>
        </div>
        <div className="flex items-center justify-around">
          <SearchProduct />

          <div className="lg:ml-40 ml-10 space-x-8">
            <Link to="/addproduct">
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
             Add Product
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Subcategory
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Currentproducts.map((product) => {
                  return (
                    <tr key={nanoid()}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-12 h-12">
                            {product.selectedImages[0] &&
                              typeof product.selectedImages[0] === "string" && (
                                <img
                                  className="w-full h-full rounded"
                                  src={product.selectedImages[0]}
                                  alt="Product Images"
                                />
                              )}
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {product.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product.category}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product.subcategory}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product.price}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          />
                          <span className="relative">
                            {" "}
                            {product.status === "active"
                              ? "Active"
                              : "Inactive"}
                          </span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {/* =-----Delete BTN ----- */}
                        <span className="relative inline-block px-3 mx-2 py-1 font-semibold text- -900 leading-tight">
                          <span
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          />
                          <span className="relative">
                            <button onClick={() =>  handleDelete(product.id)}>
                              Delete
                            </button>
                          </span>
                        </span>
                        {/* --------Edit-------  */}
                        <span className="relative inline-block px-3 mx-2 py-1 font-semibold text-green-900 leading-tight">
                          <span
                    
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          />
                          <span className="relative">
                            <button onClick={() => handleEdit(product.id)}>
                              Edit
                            </button>
                          </span>
                        </span>
                        {/* ------View------- */}
                        <span className="relative inline-block px-3 mx-2 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                          />
                          <span className="relative">
                            <button onClick={() => handleOpenView(product)}>
                              View
                            </button>
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={newProduct.length}
          postPerPage={postPerPage}
        />
      </div>

      {selectedProduct && (
        <ViewProducts
          show={true}
          close={handleCloseView}
          product={selectedProduct}
        />
      )}
      { deleteModelOpen && (
        <DeleteModel
          isOpen={deleteModelOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDeleteAction}
          title="Delete Task"
          message="Are you sure you want to delete this task?"
          deleteIndex ={deleteIndex}
        />
      )}
    </div>
  );
}

export default Table;
