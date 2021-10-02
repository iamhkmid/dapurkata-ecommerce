export const adminSidebar = [
  {
    name: "OVERVIEW",
    menu: [
      {
        name: "Dashboard",
        link: "/admin/dashboard",
        title: "OVERVIEW / Dashboard",
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
        title: "MASTER / Products",
        desc: "...",
        subMenu: [
          {
            name: "Books",
            link: "/admin/master/products/books",
            title: "MASTER / Products / Books",
            desc: "Tambah, ubah dan hapus informasi buku",
          },
          {
            name: "Categories",
            link: "/admin/master/products/categories",
            title: "MASTER / Products / Categories",
            desc: "Tambah, ubah dan hapus kategori buku",
          },
          {
            name: "Authors",
            link: "/admin/master/products/authors",
            title: "MASTER / Products / Authors",
            desc: "Tambah, ubah dan hapus author buku",
          },
          {
            name: "Publisher",
            link: "/admin/master/products/publisher",
            title: "MASTER / Products / Publisher",
            desc: "Tambah, ubah dan hapus penerbit buku",
          },
        ],
      },
      {
        name: "Users",
        link: "/admin/master/users",
        title: "MASTER / Users",
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
        title: "TRANSACTIONS / Orders",
        desc: "...",
        subMenu: [],
      },
    ],
  },
  {
    name: "CONTENTS",
    menu: [
      {
        name: "Homepage",
        link: "/admin/content/homepage",
        title: "CONTENTS / Homepage",
        desc: "Ubah informasi homepage website",
        subMenu: [],
      },

      {
        name: "Footer",
        link: "/admin/content/footer",
        title: "CONTENTS / Footer",
        desc: "Ubah informasi pada footer website",
        subMenu: [],
      },
    ],
  },
];
