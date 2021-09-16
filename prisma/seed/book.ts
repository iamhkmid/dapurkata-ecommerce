import { prisma } from "../seed";
import { author } from "./author";
import { category } from "./category";

export const book = async () => {
  const { cat1, cat2, cat3, cat4 } = await category();
  const { author1, author2, author5, author13 } = await author();
  const book1 = await prisma.book.create({
    data: {
      title: `Nebula`,
      description:
        "SELENA dan NEBULA adalah buku ke-8 dan ke-9 yang menceritakan siapa orangtua Raib dalam serial petualangan dunia paralel. Dua buku ini sebaiknya dibaca berurutan.Kedua buku ini juga bercerita tentang Akademi Bayangan Tingkat Tinggi, sekolah terbaik di seluruh Klan Bulan. Tentang persahabatan tiga mahasiswa, yang diam-diam memiliki rencana bertualang ke tempat-tempat jauh. Tapi petualangan itu berakhir buruk, saat persahabatan mereka diuji dengan rasa suka, egoisme, dan pengkhianatan. Ada banyak karakter baru, tempat-tempat baru, juga sejarah dunia paralel yang diungkap. Di dua buku ini kalian akan berkenalan dengan salah satu karakter paling kuat di dunia paralel sejauh ini. Tapi itu jika kalian bisa menebaknya. Dua buku ini bukan akhir. Justru awal terbukanya kembali portal menuju Klan Aldebaran.",
      edition: "new",
      series: "new",
      releaseYear: "2012",
      numberOfPages: 116,
      height: 32,
      weight: 320,
      price: 85000,
      stock: 43,
      rating: "5",
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
      description:
        "SELENA dan NEBULA adalah buku ke-8 dan ke-9 yang menceritakan siapa orangtua Raib dalam serial petualangan dunia paralel. Dua buku ini sebaiknya dibaca berurutan. Kedua buku ini juga bercerita tentang Akademi Bayangan Tingkat Tinggi, sekolah terbaik di seluruh Klan Bulan. Tentang persahabatan tiga mahasiswa, yang diam-diam memiliki rencana bertualang ke tempat-tempat jauh. Tapi petualangan itu berakhir buruk, saat persahabatan mereka diuji dengan rasa suka, egoisme, dan pengkhianatan. Ada banyak karakter baru, tempat-tempat baru, juga sejarah dunia paralel yang diungkap. Di dua buku ini kalian akan berkenalan dengan salah satu karakter paling kuat di dunia paralel sejauh ini. Tapi itu jika kalian bisa menebaknya. Dua buku ini bukan akhir. Justru awal terbukanya kembali portal menuju Klan Aldebaran.",
      edition: "new",
      series: "new",
      releaseYear: "2012",
      numberOfPages: 116,
      height: 12,
      weight: 350,
      price: 85000,
      stock: 43,
      rating: "4.9",
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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "new",
      series: "new",
      releaseYear: "2012",
      numberOfPages: 116,
      height: 42,
      weight: 100,
      price: 93000,
      stock: 43,
      rating: "4.8",
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
      title: `Concerto Al Malioboro`,
      description:
        "Lima anak muda menuntut ilmu di sebuah universitas swasta di Yogyakarta. Mereka seangkatan dan mengambil jurusan yang sama. Mereka adalah Kardiv asal Surabaya, Wawan asal Kediri, Astrid dan Vera sama-sama orang Solo, serta Widya yang asli Yogyakarta. Persahabatan mereka berawal ketika mereka berlima tergabung dalam sebuah kelompok tugas di salah satu kelas yang mereka ambil pada semester pertama.",
      edition: "new",
      series: "new",
      releaseYear: "2012",
      numberOfPages: 156,
      height: 42,
      weight: 100,
      price: 75000,
      stock: 41,
      rating: "4.2",
      imgDir: "/uploads/books/concerto-al-malioboro/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      BookPicture: {
        create: [
          {
            type: "COVER",
            url: "/uploads/books/concerto-al-malioboro/concerto-al-malioboro.jpg",
          },
        ],
      },
    },
  });
  const book5 = await prisma.book.create({
    data: {
      title: `Example book1`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "3.9",
      imgDir: "/uploads/books/Example1/",
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
      title: `Example book2`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "3.9",
      imgDir: "/uploads/books/Example2/",
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
      title: `Example book3`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "3.9",
      imgDir: "/uploads/books/Example3/",
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
      title: `Example book4`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "3.9",
      imgDir: "/uploads/books/Example4/",
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
      title: `Example book5`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "3.9",
      imgDir: "/uploads/books/Example5/",
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
      title: `Example book6`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "3.9",
      imgDir: "/uploads/books/Example6/",
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
      title: `Example book7`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "3.9",
      imgDir: "/uploads/books/Example7/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author5.id },
      },
    },
  });
  const book12 = await prisma.book.create({
    data: {
      title: `Example book8`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "Example",
      releaseYear: "2019",
      numberOfPages: 200,
      height: 42,
      weight: 100,
      price: 50000,
      stock: 43,
      rating: "3.9",
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
    book12,
  });
};
