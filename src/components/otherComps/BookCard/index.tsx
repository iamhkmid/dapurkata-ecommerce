import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useWindowSize } from "react-use";
import { AuthContext } from "../../../contexts/AuthCtx";
import { TBookCard } from "../../../types/book";
import IconsControl from "../../IconsControl";
import * as El from "./BookCardElement";
import BookCover from "./BookCover";

const BookCard: FC<{ book: TBookCard }> = ({ book }) => {
  const { user } = useContext(AuthContext);
  const { push } = useRouter();

  const initialImgSize = { h: 180, w: 125 };
  const [imgSize, setImgSize] = useState(initialImgSize);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 540) {
      setImgSize(initialImgSize);
    } else if (width <= 540) {
      const newWidth = (width - 16 * 4) / 2;
      setImgSize({ h: (newWidth / 25) * 36, w: newWidth });
    }
  }, [width]);

  return (
    <El.Main>
      <El.CoverWrapper>
        <div>
          <BookCover
            url={book.coverUrl}
            quality={75}
            height={imgSize.h}
            width={imgSize.w}
          />
        </div>
      </El.CoverWrapper>
      <El.InfoWrapper>
        <El.InfoGroup1 className="group-1" width={imgSize.w}>
          <h1>{book.title}</h1>
          <h1>{book.Author.name}</h1>
        </El.InfoGroup1>
      </El.InfoWrapper>
    </El.Main>
  );
};

export default BookCard;
