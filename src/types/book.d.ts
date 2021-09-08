export type TGetBook = {
  id: string;
  title: string;
  synopsis;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  height: number;
  weight: number;
  stock: number;
  price: number;
  rating: string;
  imgDir: string;
  Category: {
    id: string;
    name: string;
  }[];
  Author: {
    id: string;
    name: string;
  };
  BookPicture: {
    id: string;
    type: string;
    url: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
};

type TGQLGetBook = {
  book: TGetBook;
};
export type TOrderBook = {
  id: string;
  title: string;
  price: number;
  weight: number;
  Author: {
    id: string;
    name: string;
  };
  BookPicture: {
    id: string;
    type: string;
    url: string;
  }[];
};
type TGQLGetOrderBook = {
  book: TOrderBook;
};

type TGQLGetFormBookInit = {
  book: {
    id: string;
    title: string;
    synopsis;
    edition: string;
    series: string;
    releaseYear: string;
    numberOfPages: number;
    height: number;
    weight: number;
    stock: number;
    price: number;
    rating: string;
    imgDir: string;
    Category: {
      id: string;
      name: string;
      group: string;
    }[];
    Author: {
      id: string;
      name: string;
    };
  };
};

type TGQLGetBookDel = {
  book: {
    id: string;
    title: string;
  };
};

type TGQLGetBooks = {
  books: {
    id: string;
    title: string;
    price: number;
    stock: string;
    Category: {
      id: string;
      name: string;
      group: string;
    };
    Author: {
      id: string;
      name: string;
    };
    createdAt: Date;
    updatedAt: Date;
  }[];
};

type TGQLCreateBook = {
  createBook: {
    id: string;
    title: string;
    price: number;
    stock: string;
    Category: {
      id: string;
      name: string;
      group: string;
    };
    Author: {
      id: string;
      name: string;
    };
    createdAt: Date;
    updatedAt: Date;
  };
};

type TGQLUpdateBook = {
  updateBook: {
    id: string;
    title: string;
    price: number;
    stock: string;
    Category: {
      id: string;
      name: string;
      group: string;
    };
    Author: {
      id: string;
      name: string;
    };
    createdAt: Date;
    updatedAt: Date;
  };
};

type TGetBookATC = {
  id: string;
  title: string;
  stock: number;
  price: number;
  weight: number;
  Author: {
    id: string;
    name: string;
  };
  BookPicture: {
    id: string;
    type: string;
    url: string;
  }[];
};

type TGQLGetBookATC = {
  book: TGetBookATC;
};
type TGQLGetBooksATC = {
  book: TGetBookATC[];
};

type TGQLGetBookCards = {
  books: {
    id: string;
    title: string;
    price: string;
    BookPicture: {
      type: string;
      url: string;
    }[];
    Author: {
      name: string;
    };
  }[];
};

export type TBookCard = {
  id: string;
  title: string;
  price: string;
  coverUrl: string;
  Author: {
    name: string;
  };
  inCart: boolean;
};

type TGQLGetFormBook = {
  authors: {
    id: string;
    name: string;
  }[];
  categories: {
    id: string;
    name: string;
    group: string;
  }[];
};
