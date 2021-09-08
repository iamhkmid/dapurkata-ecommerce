import { prisma } from "../seed";

export const category = async () => {
  const cat1 = await prisma.category.create({
    data: { group: "ReaderGroup", name: "Anak" },
  });
  const cat2 = await prisma.category.create({
    data: { group: "ReaderGroup", name: "Dewasa" },
  });
  const cat3 = await prisma.category.create({
    data: { group: "ReaderGroup", name: "Semua Umur" },
  });
  const cat4 = await prisma.category.create({
    data: { group: "LibraryType", name: "Fiksi" },
  });
  const cat5 = await prisma.category.create({
    data: { group: "LibraryType", name: "Non Fiksi" },
  });
  const cat6 = await prisma.category.create({
    data: { group: "Published", name: "Perguruan Tinggi" },
  });
  const cat7 = await prisma.category.create({
    data: { group: "Published", name: "Swasta" },
  });
  const cat8 = await prisma.category.create({
    data: { group: "Published", name: "Penelitian" },
  });
  const cat9 = await prisma.category.create({
    data: { group: "Published", name: "Non Penelitian" },
  });
  const cat10 = await prisma.category.create({
    data: { group: "Published", name: "Pemerintah" },
  });
  const cat11 = await prisma.category.create({
    data: { group: "TypeCategory", name: "Terjemahan" },
  });
  const cat12 = await prisma.category.create({
    data: { group: "TypeCategory", name: "Non Terjemahan" },
  });
  const cat13 = await prisma.category.create({
    data: { group: "Other", name: "Example Category1" },
  });
  const cat14 = await prisma.category.create({
    data: { group: "Other", name: "Example Category2" },
  });
  const cat15 = await prisma.category.create({
    data: { group: "Other", name: "Example Category3" },
  });

  console.log({
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    cat6,
    cat7,
    cat8,
    cat9,
    cat10,
    cat11,
    cat12,
    cat13,
    cat14,
    cat15,
  });
  return {
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    cat6,
    cat7,
    cat8,
    cat9,
    cat10,
    cat11,
    cat12,
    cat13,
    cat14,
    cat15,
  };
};
