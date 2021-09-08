import { prisma } from "../seed";
import { author } from "./author";
import { category } from "./category";

export const book = async () => {
  const { cat1, cat2, cat3, cat4 } = await category();
  const { author1, author2, author5 } = await author();
  const book1 = await prisma.book.create({
    data: {
      title: `Nebula`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "new",
      series: "new",
      releaseYear: "2012",
      numberOfPages: 116,
      height: 32,
      weight: 320,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/nebula/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author1.id },
      },
      BookPicture: {
        create: [
          {
            type: "COVER",
            url: "/uploads/books/nebula/nebula.jpg",
          },
        ],
      },
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title: `Selena`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "new",
      series: "new",
      releaseYear: "2012",
      numberOfPages: 116,
      height: 12,
      weight: 350,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/selena/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author1.id },
      },
      BookPicture: {
        create: [
          {
            type: "COVER",
            url: "/uploads/books/selena/selena.jpg",
          },
        ],
      },
    },
  });

  const book3 = await prisma.book.create({
    data: {
      title: `Jika Kita Tak Pernah Jadi Apa-Apa`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "new",
      series: "new",
      releaseYear: "2012",
      numberOfPages: 116,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/Jika-Kita-Tak-Pernah-Jadi-Apa-apa-Alvi-Syahrin/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author2.id },
      },
      BookPicture: {
        create: [
          {
            type: "COVER",
            url: "/uploads/books/Jika-Kita-Tak-Pernah-Jadi-Apa-apa-Alvi-Syahrin/Jika-Kita-Tak-Pernah-Jadi-Apa-apa-Alvi-Syahrin.jpg",
          },
        ],
      },
    },
  });
  const book4 = await prisma.book.create({
    data: {
      title: `Example book1`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/Example1/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author5.id },
      },
    },
  });
  const book5 = await prisma.book.create({
    data: {
      title: `Example book2`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/Example2/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author5.id },
      },
    },
  });
  const book6 = await prisma.book.create({
    data: {
      title: `Example book3`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/Example3/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author5.id },
      },
    },
  });
  const book7 = await prisma.book.create({
    data: {
      title: `Example book4`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/Example4/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author5.id },
      },
    },
  });
  const book8 = await prisma.book.create({
    data: {
      title: `Example book5`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/Example5/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author5.id },
      },
    },
  });
  const book9 = await prisma.book.create({
    data: {
      title: `Example book6`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/Example6/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author5.id },
      },
    },
  });
  const book10 = await prisma.book.create({
    data: {
      title: `Example book7`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/Example7/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author5.id },
      },
    },
  });
  const book11 = await prisma.book.create({
    data: {
      title: `Example book8`,
      synopsis:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "4.7",
      imgDir: "/uploads/books/Example9/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author5.id },
      },
    },
  });
  console.log({
    book1,
    book2,
    book3,
    book4,
    book5,
    book6,
    book7,
    book8,
    book9,
    book10,
    book11,
  });
};
