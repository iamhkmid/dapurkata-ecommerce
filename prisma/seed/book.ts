import { prisma } from "../seed";
import { author } from "./author";
import { category } from "./category";
import { publisher } from "./publisher";

export const book = async () => {
  const { cat1, cat2, cat3, cat4 } = await category();
  const { alviArdhi, gramedia, andiPublisher, gagasmedia, publisher1 } =
    await publisher();
  const { tereLiye, alviSyahrin, anselWatra, author13 } = await author();
  const nebula = await prisma.book.create({
    data: {
      title: `Nebula`,
      description:
        "SELENA dan NEBULA adalah buku ke-8 dan ke-9 yang menceritakan siapa orangtua Raib dalam serial petualangan dunia paralel. Dua buku ini sebaiknya dibaca berurutan.Kedua buku ini juga bercerita tentang Akademi Bayangan Tingkat Tinggi, sekolah terbaik di seluruh Klan Bulan. Tentang persahabatan tiga mahasiswa, yang diam-diam memiliki rencana bertualang ke tempat-tempat jauh. Tapi petualangan itu berakhir buruk, saat persahabatan mereka diuji dengan rasa suka, egoisme, dan pengkhianatan. Ada banyak karakter baru, tempat-tempat baru, juga sejarah dunia paralel yang diungkap. Di dua buku ini kalian akan berkenalan dengan salah satu karakter paling kuat di dunia paralel sejauh ini. Tapi itu jika kalian bisa menebaknya. Dua buku ini bukan akhir. Justru awal terbukanya kembali portal menuju Klan Aldebaran.",
      condition: "NEW",
      coverType: "HARD COVER",
      discount: 20,
      releaseYear: "2020",
      numberOfPages: 116,
      length: 20,
      width: 15,
      weight: 320,
      price: 85000,
      stock: 43,
      language: "Indonesia",
      isbn: "9786020639536",
      slug: "nebula-tere-liye",
      pictureDir: "/uploads/books/nebula/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: tereLiye.id },
      },
      Publisher: {
        connect: { id: gramedia.id },
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

  const selena = await prisma.book.create({
    data: {
      title: `Selena`,
      description:
        "SELENA dan NEBULA adalah buku ke-8 dan ke-9 yang menceritakan siapa orangtua Raib dalam serial petualangan dunia paralel. Dua buku ini sebaiknya dibaca berurutan. Kedua buku ini juga bercerita tentang Akademi Bayangan Tingkat Tinggi, sekolah terbaik di seluruh Klan Bulan. Tentang persahabatan tiga mahasiswa, yang diam-diam memiliki rencana bertualang ke tempat-tempat jauh. Tapi petualangan itu berakhir buruk, saat persahabatan mereka diuji dengan rasa suka, egoisme, dan pengkhianatan. Ada banyak karakter baru, tempat-tempat baru, juga sejarah dunia paralel yang diungkap. Di dua buku ini kalian akan berkenalan dengan salah satu karakter paling kuat di dunia paralel sejauh ini. Tapi itu jika kalian bisa menebaknya. Dua buku ini bukan akhir. Justru awal terbukanya kembali portal menuju Klan Aldebaran.",

      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2016",
      numberOfPages: 116,
      discount: 17,
      length: 20,
      width: 12,
      weight: 350,
      price: 85000,
      stock: 0,
      language: "Indonesia",
      isbn: "9786020639512",
      slug: "selena-tere-liye",
      pictureDir: "/uploads/books/selena/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: tereLiye.id },
      },
      Publisher: {
        connect: { id: gramedia.id },
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

  const jikaKitaTak = await prisma.book.create({
    data: {
      title: `Jika Kita Tak Pernah Jadi Apa-Apa`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      discount: 12,
      releaseYear: "2019",
      numberOfPages: 116,
      length: 20,
      width: 12,
      weight: 235,
      price: 93000,
      stock: 43,
      language: "Indonesia",
      isbn: "9789797809485",
      slug: "Jika-Kita-Tak-Pernah-Jadi-Apa-apa-Alvi-Syahrin",
      pictureDir:
        "/uploads/books/Jika-Kita-Tak-Pernah-Jadi-Apa-apa-Alvi-Syahrin/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: alviSyahrin.id },
      },
      Publisher: {
        connect: { id: gagasmedia.id },
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
  const concertoAl = await prisma.book.create({
    data: {
      title: `Concerto Al Malioboro`,
      description:
        "Lima anak muda menuntut ilmu di sebuah universitas swasta di Yogyakarta. Mereka seangkatan dan mengambil jurusan yang sama. Mereka adalah Kardiv asal Surabaya, Wawan asal Kediri, Astrid dan Vera sama-sama orang Solo, serta Widya yang asli Yogyakarta. Persahabatan mereka berawal ketika mereka berlima tergabung dalam sebuah kelompok tugas di salah satu kelas yang mereka ambil pada semester pertama.",

      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      discount: 10,
      releaseYear: "2012",
      numberOfPages: 156,
      length: 42,
      width: 12,
      weight: 235,
      price: 75000,
      stock: 41,
      language: "Indonesia",
      isbn: "9789797809485",
      slug: "concerto-al-malioboro-ansel-watra",
      pictureDir: "/uploads/books/concerto-al-malioboro/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: anselWatra.id },
      },
      Publisher: {
        connect: { id: andiPublisher.id },
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
  const insecurityIsMy = await prisma.book.create({
    data: {
      title: `Insecurity Is My Middle Name`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      discount: 10,
      releaseYear: "2021",
      numberOfPages: 200,
      length: 42,
      weight: 235,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "9786239700201",
      slug: "insecurity-is-my-middle-name-alvi-syahrin",
      pictureDir: "/uploads/books/insecurity-is-my-middle-name/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: alviSyahrin.id },
      },
      Publisher: {
        connect: { id: alviArdhi.id },
      },
      BookPicture: {
        create: [
          {
            type: "COVER",
            url: "/uploads/books/insecurity-is-my-middle-name/insecurity-is-my-middle-name.jpg",
          },
        ],
      },
    },
  });
  const book1 = await prisma.book.create({
    data: {
      title: `Example book1`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      discount: 10,
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 0,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example1",
      pictureDir: "/uploads/books/Example1/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book2 = await prisma.book.create({
    data: {
      title: `Example book2`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      discount: 10,
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example2",
      pictureDir: "/uploads/books/Example2/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book3 = await prisma.book.create({
    data: {
      title: `Example book3`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 0,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example3",
      pictureDir: "/uploads/books/Example3/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book4 = await prisma.book.create({
    data: {
      title: `Example book4`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      discount: 10,
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example4",
      pictureDir: "/uploads/books/Example4/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book5 = await prisma.book.create({
    data: {
      title: `Example book5`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example5",
      pictureDir: "/uploads/books/Example5/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book6 = await prisma.book.create({
    data: {
      title: `Example book6`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example6",
      pictureDir: "/uploads/books/Example6/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book7 = await prisma.book.create({
    data: {
      title: `Example book7`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example7",
      pictureDir: "/uploads/books/Example7/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book8 = await prisma.book.create({
    data: {
      title: `Example book8`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example8",
      pictureDir: "/uploads/books/Example8/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book9 = await prisma.book.create({
    data: {
      title: `Example book9`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example9",
      pictureDir: "/uploads/books/Example9/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book10 = await prisma.book.create({
    data: {
      title: `Example book10`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example10",
      pictureDir: "/uploads/books/Example10/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book11 = await prisma.book.create({
    data: {
      title: `Example book11`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example11",
      pictureDir: "/uploads/books/Example11/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  const book12 = await prisma.book.create({
    data: {
      title: `Example book12`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      edition: "Example",
      series: "1",
      condition: "NEW",
      coverType: "HARD COVER",
      releaseYear: "2019",
      numberOfPages: 200,
      length: 42,
      weight: 300,
      price: 50000,
      stock: 43,
      width: 15,
      language: "Indonesia",
      isbn: "123456789",
      slug: "author13-example12",
      pictureDir: "/uploads/books/Example12/",
      Category: {
        connect: [{ id: cat3.id }, { id: cat4.id }],
      },
      Author: {
        connect: { id: author13.id },
      },
      Publisher: {
        connect: { id: publisher1.id },
      },
    },
  });
  console.log({
    nebula,
    selena,
    jikaKitaTak,
    concertoAl,
    insecurityIsMy,
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
