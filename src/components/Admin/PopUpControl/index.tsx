import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AdminContext } from "../../../contexts/AdminNavCtx";
import AuthorDelete from "../Master/Products/Authors/PopUp/Delete";
import AuthorUpdate from "../Master/Products/Authors/PopUp/Update";
import AuthorDetail from "../Master/Products/Authors/PopUp/Detail";
import BookDelete from "../Master/Products/Books/PopUp/Delete";
import UpdateDelete from "../Master/Products/Books/PopUp/Update";
import DetailDelete from "../Master/Products/Books/PopUp/Detail";
import CategoryDelete from "../Master/Products/Categories/PopUp/Delete";
import CategoryUpdate from "../Master/Products/Categories/PopUp/Update";
import CategoryDetail from "../Master/Products/Categories/PopUp/Detail";

const PopUpControl = () => {
  const {
    adminNav: { showPopUp },
  } = useContext(AdminContext);
  return (
    <AnimatePresence>
      {showPopUp.name === "authorDelete" && (
        <AuthorDelete id={showPopUp.value} />
      )}
      {showPopUp.name === "authorDetail" && (
        <AuthorDetail id={showPopUp.value} />
      )}
      {showPopUp.name === "authorUpdate" && (
        <AuthorUpdate id={showPopUp.value} />
      )}
      {showPopUp?.name === "bookDelete" && <BookDelete id={showPopUp.value} />}
      {showPopUp?.name === "bookDetail" && (
        <DetailDelete id={showPopUp.value} />
      )}
      {showPopUp?.name === "bookUpdate" && (
        <UpdateDelete id={showPopUp.value} />
      )}
      {showPopUp.name === "categoryDelete" && (
        <CategoryDelete id={showPopUp.value} />
      )}
      {showPopUp.name === "categoryDetail" && (
        <CategoryDetail id={showPopUp.value} />
      )}
      {showPopUp.name === "categoryUpdate" && (
        <CategoryUpdate id={showPopUp.value} />
      )}
    </AnimatePresence>
  );
};

export default PopUpControl;
