import { TDashboardQuery } from "../../../types/graphql";

export const Query: TDashboardQuery = {
  dashboard: async (_, __, { db, cache }) => {
    const totalOrders = await db.order.count({
      where: {
        transactionStatus: "settlement",
      },
    });
    const totalIncome = await db.order.aggregate({
      _sum: {
        grossAmount: true,
      },
      where: {
        transactionStatus: "settlement",
      },
    });
    const totalProducts = await db.book.count();
    const totalUsers = await db.user.count({ where: { role: "USER" } });
    const lastOrders = await db.order.findMany({
      take: 10,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        grossAmount: true,
        User: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        transactionStatus: true,
        transactionTime: true,
      },
    });
    const onlineUsers = cache.get("online-user") as [];
    return {
      totalOrders,
      totalIncome: totalIncome._sum.grossAmount,
      totalProducts,
      totalUsers,
      lastOrders,
      onlineUsers,
    };
  },
};
