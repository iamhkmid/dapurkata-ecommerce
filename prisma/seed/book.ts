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
      title: `Narrative Inquiry For Teacher Education: Learning from the past stories for today and future`,
      description:
        "Teachers nowadays are engaging in research. They are upgrading the teacher identity value by being teacher researchers. Teachers might have recognized lots of methods for conducting research. Narrative inquiry is one considerable research design that allows researchers explore and study the lived experiences of human being. This is the book that teacher researchers might need, not limited to pre-service teachers, in-service teachers, novice teachers, or experienced teachers. It provides insightful direction for teachers in conducting research, whether they are researching other people or their own experience. .",
      condition: "NEW",
      coverType: "Ebook",
      discount: 0,
      releaseYear: "2022",
      numberOfPages: 182,
      length: 20,
      width: 15,
      weight: 320,
      price: 85000,
      stock: 43,
      language: "Ingrris",
      isbn: "0",
      slug: "1",
      pictureDir: "/uploads/books/1/",
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
            url: "/uploads/books/1/1.jpg",
          },
        ],
      },
    },
  });

  const jikaKitaTak = await prisma.book.create({
    data: {
      title: `TEACHING AND LEARNING ACADEMIC WRITING WITH ARTIFICIAL INTELLIGENCE (AI) SUPPORT `,
      description:
        "Academic Writing is essential for students. However, how to learn and teach Academic Writing effectively needs to be further researched. Along with the rapid development of educational technology, teaching and learning for academic writing supported by technology also develops simultaneously. One of technologies adopted to support academic writing is artificial intelligence (AI) technology embedded in writing-assisted programs such as Project Essay Grade (PEG), Intelligent Essay Assessor by Pearson, Criterion by Educational Testing Service, My Access! by Vantage, Write & Improve by Cambridge English, Write to Learn by Pearson, Grammarly, Scribo by Literatu, and so on. .",
      condition: "NEW",
      coverType: "Ebook",
      discount: 0,
      releaseYear: "2022",
      numberOfPages: 106,
      length: 20,
      width: 15,
      weight: 320,
      price: 95000,
      stock: 50,
      language: "Ingrris",
      isbn: "0",
      slug: "2",
      pictureDir: "/uploads/books/2/",
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
            url: "/uploads/books/2/2.jpg",
          },
        ],
      },
    },
  });
  const concertoAl = await prisma.book.create({
    data: {
      title: `SASTRA SIBER (CYBER LITERATURE) Eksistensi dan Pemanfaatannya dalam Pembelajaran Sastra`,
      description:
        "eksistensi sastra terus dinamis selaras dengan dinamika budaya masyarakat. Ia bertumbuh kembang, tergantung juga pada media yang tersedia di lingkungan masyarakat. Pada masa lalu, kegiatan bersastra sudah berlangsung. Saat itu, keberadaan media masih sangat terbatas. Akibatnya, sastra dilahirkan dalam bentuk lisan sehingga dikenal dengan sastra lisan. Begitu adanya, lalu, sastra lisan disebarluaskan dan diteruskan kepada regenerasi dengan mengandalkan lisan penutur, termasuk pendongeng. Sejauh perluasan publikasinya, sastra lisan diterapkan saat upacara- upacara adat dan/atau kala perayaan tradisi di daerah tertentu. .",
      condition: "NEW",
      coverType: "Ebook",
      discount: 0,
      releaseYear: "2022",
      numberOfPages: 351,
      length: 20,
      width: 15,
      weight: 320,
      price: 10000,
      stock: 50,
      language: "Indonesia",
      isbn: "0",
      slug: "3",
      pictureDir: "/uploads/books/3/",
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
            url: "/uploads/books/3/3.jpg",
          },
        ],
      },
    },
  });
  const insecurityIsMy = await prisma.book.create({
    data: {
      title: `Konvergensi Teori di Era Teknologi Digital: Penyatuan Ranah Komunikasi Massa dan Interpersonal`,
      description:
        "Perkembangan teknologi komunikasi terutama komunikasi digital, membawa perubahan yang signifikan dalam teori dan riset komunikasi. Pembagian teori komunikasi antara interpersonal dan media massa yang dianggap sebagai sesuatu yang diyaniki para ilmuwan komunikasi sebagai pembagian yang jelas dan alami dari keilmuan Komunikasi, diera digital teknologi sudah mencair satu sama lain, kabur batasan diantara keduanya bahkan menyatu atau konvergen.",
      condition: "NEW",
      coverType: "Ebook",
      discount: 0,
      releaseYear: "2022",
      numberOfPages: 178,
      length: 20,
      width: 15,
      weight: 320,
      price: 88000,
      stock: 50,
      language: "Indonesia",
      isbn: "0",
      slug: "4",
      pictureDir: "/uploads/books/4/",
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
            url: "/uploads/books/4/4.jpg",
          },
        ],
      },
    },
  });
  
  console.log({
    nebula,
    jikaKitaTak,
    concertoAl,
    insecurityIsMy,
  });
};
