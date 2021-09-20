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
    adminNav: { popup },
  } = useContext(AdminNavCtx);
  return (
    <AnimatePresence>
      {popup.name === "AUTHOR_DELETE" && <AuthorDelete id={popup.value} />}
      {popup.name === "AUTHOR_DETAIL" && <AuthorDetail id={popup.value} />}
      {popup.name === "AUTHOR_UPDATE" && <AuthorUpdate id={popup.value} />}
      {popup?.name === "BOOK_DELETE" && <BookDelete id={popup.value} />}
      {popup?.name === "BOOK_DETAIL" && <BookDetail id={popup.value} />}
      {popup?.name === "BOOK_UPDATE" && <BookUpadate id={popup.value} />}
      {popup.name === "CATEGORY_DELETE" && <CategoryDelete id={popup.value} />}
      {popup.name === "CATEGORY_DETAIL" && <CategoryDetail id={popup.value} />}
      {popup.name === "CATEGORY_UPDATE" && <CategoryUpdate id={popup.value} />}
      {popup.name === "PUBLISHER_DELETE" && (
        <PublisherDelete id={popup.value} />
      )}
      {popup.name === "PUBLISHER_DETAIL" && (
        <PublisherDetail id={popup.value} />
      )}
      {popup.name === "PUBLISHER_UPDATE" && (
        <PublisherUpdate id={popup.value} />
      )}

      {popup.name === "USER_DELETE" && <UserDelete userId={popup.value} />}
      {popup.name === "USER_UPDATE" && <UserUpdate userId={popup.value} />}
    </AnimatePresence>
  );
};

export default PopUpControl;
