import { useRouter } from "next/router";
import { FC, useContext } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../contexts/AuthCtx";
import { TBookCard } from "../../../types/book";
import IconsControl from "../../IconsControl";
import * as El from "./BookCardElement";
import BookCover from "./BookCover";

const BookCard: FC<{ book: TBookCard }> = ({ book }) => {
  const { user } = useContext(AuthContext);
  const { push } = useRouter();
  return (
    <El.Main>
      <El.CoverWrapper>
        <BookCover url={book.coverUrl} quality={10} />
      </El.CoverWrapper>
      <El.InfoWrapper>
        <El.InfoGroup1 className="group-1">
          <h1>{book.title.toUpperCase()}</h1>
          <h1>{book.Author.name}</h1>
        </El.InfoGroup1>
      </El.InfoWrapper>
    </El.Main>
  );
};

export default BookCard;
