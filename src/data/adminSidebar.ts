export const adminSidebar = [
  {
    name: "OVERVIEW",
    menu: [
      {
        name: "Dashboard",
        link: "/admin/dashboard",
        title: "OVERVIEW > Dashboard",
        desc: "Informasi Toko Online",
        subMenu: [],
      },
    ],
  },
  {
    name: "MASTER",
    menu: [
      {
        name: "Products",
        link: "/admin/master/products/books",
        title: "MASTER > Products",
        desc: "...",
        subMenu: [
          {
            name: "Books",
            link: "/admin/master/products/books",
            title: "MASTER > Products > Books",
            desc: "Tambah, ubah dan hapus informasi buku",
          },
          {
            name: "Categories",
            link: "/admin/master/products/categories",
            title: "MASTER > Products > Categories",
            desc: "Tambah, ubah dan hapus kategori buku",
          },
          {
            name: "Authors",
            link: "/admin/master/products/authors",
            title: "MASTER > Products > Authors",
            desc: "Tambah, ubah dan hapus author buku",
          },
        ],
      },
      {
        name: "Users",
        link: "/admin/master/users",
        title: "MASTER > Users",
        desc: "...",
        subMenu: [],
      },
    ],
  },
  {
    name: "TRANSACTIONS",
    menu: [
      {
        name: "Orders",
        link: "/admin/transaction/orders",
        title: "TRANSACTIONS > Orders",
        desc: "...",
        subMenu: [],
      },
    ],
  },
  {
    name: "CONTENTS",
    menu: [
      {
        name: "Slider Contents",
        link: "/admin/content/slider-contents",
        title: "CONTENTS > Slider Contents",
        desc: "...",
        subMenu: [],
      },
      {
        name: "Services",
        link: "/admin/content/section1",
        title: "CONTENTS > Services",
        desc: "...",
        subMenu: [
          {
            name: "Section1",
            link: "/admin/content/section1",
            title: "MASTER > Products > Authors",
            desc: "...",
          },
          {
            name: "Section2",
            link: "/admin/content/section2",
            title: "MASTER > Products > Authors",
            desc: "...",
          },
          {
            name: "Section3",
            link: "/admin/content/section3",
            title: "MASTER > Products > Authors",
            desc: "...",
          },
        ],
      },
      {
        name: "Footer",
        link: "/admin/content/Footer",
        title: "CONTENTS > Footer",
        desc: "...",
        subMenu: [],
      },
    ],
  },
];
