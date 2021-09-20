import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AdminNavCtx } from "../../../contexts/AdminNavCtx";
import AuthorDelete from "../Master/Products/Authors/PopUp/Delete";
import AuthorUpdate from "../Master/Products/Authors/PopUp/Update";
import AuthorDetail from "../Master/Products/Authors/PopUp/Detail";
import BookDelete from "../Master/Products/Books/PopUp/Delete";
import BookUpadate from "../Master/Products/Books/PopUp/Update";
import BookDetail from "../Master/Products/Books/PopUp/Detail";
import CategoryDelete from "../Master/Products/Categories/PopUp/Delete";
import CategoryUpdate from "../Master/Products/Categories/PopUp/Update";
import CategoryDetail from "../Master/Products/Categories/PopUp/Detail";
import PublisherDelete from "../Master/Products/Publisher/PopUp/Delete";
import PublisherUpdate from "../Master/Products/Publisher/PopUp/Update";
import PublisherDetail from "../Master/Products/Publisher/PopUp/Detail";
import UserDelete from "../Master/Users/PopUp/Delete";
import UserUpdate from "../Master/Users/PopUp/Update";

const PopUpControl = () => {
  const {
    adminNav: { showPopUp },
  } = useContext(AdminNavCtx);
  return (
    <AnimatePresence>
      {showPopUp.name === "AUTHOR_DELETE" && (
        <AuthorDelete id={showPopUp.value} />
      )}
      {showPopUp.name === "AUTHOR_DETAIL" && (
        <AuthorDetail id={showPopUp.value} />
      )}
      {showPopUp.name === "AUTHOR_UPDATE" && (
        <AuthorUpdate id={showPopUp.value} />
      )}
      {showPopUp?.name === "BOOK_DELETE" && <BookDelete id={showPopUp.value} />}
      {showPopUp?.name === "BOOK_DETAIL" && <BookDetail id={showPopUp.value} />}
      {showPopUp?.name === "BOOK_UPDATE" && (
        <BookUpadate id={showPopUp.value} />
      )}
      {showPopUp.name === "CATEGORY_DELETE" && (
        <CategoryDelete id={showPopUp.value} />
      )}
      {showPopUp.name === "CATEGORY_DETAIL" && (
        <CategoryDetail id={showPopUp.value} />
      )}
      {showPopUp.name === "CATEGORY_UPDATE" && (
        <CategoryUpdate id={showPopUp.value} />
      )}
      {showPopUp.name === "PUBLISHER_DELETE" && (
        <PublisherDelete id={showPopUp.value} />
      )}
      {showPopUp.name === "PUBLISHER_DETAIL" && (
        <PublisherDetail id={showPopUp.value} />
      )}
      {showPopUp.name === "PUBLISHER_UPDATE" && (
        <PublisherUpdate id={showPopUp.value} />
      )}

      {showPopUp.name === "USER_DELETE" && (
        <UserDelete userId={showPopUp.value} />
      )}
      {showPopUp.name === "USER_UPDATE" && (
        <UserUpdate userId={showPopUp.value} />
      )}
    </AnimatePresence>
  );
};

export default PopUpControl;
