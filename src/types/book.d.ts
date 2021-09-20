export type TGetBook = {
  id: string;
  title: string;
  description;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  lenght: number;
  width: number;
  weight: number;
  stock: number;
  price: number;
  language: string;
  isbn: string;
  pictureDir: string;
  Category: {
    id: string;
    name: string;
  }[];
  Author: {
    id: string;
    name: string;
  };
  Publisher: {
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
    description;
    edition: string;
    series: string;
    releaseYear: string;
    numberOfPages: number;
    lenght: number;
    width: number;
    weight: number;
    stock: number;
    price: number;
    language: string;
    isbn: string;
    Category: {
      id: string;
      name: string;
      group: string;
    }[];
    Author: {
      id: string;
      name: string;
    };
    Publisher: {
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
    isbn: string;
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

type TBookDetail = {
  id: string;
  title: string;
  description: string;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  weight: number;
  lenght: number;
  width: number;
  stock: number;
  price: number;
  language: string;
  isbn: string;
  Category: {
    id: string;
    name: string;
  }[];
  Author: {
    id: string;
    name: string;
  };
  Publisher: {
    id: string;
    name: string;
  };
  BookPicture: {
    id: string;
    type: string;
    url: string;
  }[];
};

type TGQLBookDetail = {
  book: TBookDetail;
};
type TGQLGetBooksATC = {
  book: TBookDetail[];
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
  publishers: {
    id: string;
    name: string;
  }[];
  categories: {
    id: string;
    name: string;
    group: string;
  }[];
};
