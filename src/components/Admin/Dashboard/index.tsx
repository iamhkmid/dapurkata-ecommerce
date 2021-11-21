import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { DASHBOARD } from "../../../graphql/dashboard/queries";
import { ONLINE_USER } from "../../../graphql/dashboard/subscriptions";
import {
  TGQLDashboardQuery,
  TGQLOnlineUserSubs,
} from "../../../types/dashboard";
import IconsControl from "../../IconsControl";
import Cards from "./Cards";
import * as El from "./DashboardElement";
import Graph from "./Graph";
import SideSection from "./SideSection";

const Dashboard = () => {
  const { data, error, loading, subscribeToMore } =
    useQuery<TGQLDashboardQuery>(DASHBOARD, {
      fetchPolicy: "cache-and-network",
      errorPolicy: "all",
    });

  const subscribeDashboard = () => {
    subscribeToMore<TGQLOnlineUserSubs>({
      document: ONLINE_USER,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data?.onlineUsers) return prev;
        const newOnlineUsers = subscriptionData.data.onlineUsers;
        return {
          dashboard: { ...data?.dashboard, onlineUsers: newOnlineUsers },
        } as TGQLDashboardQuery;
      },
    });
  };

  useEffect(() => {
    if (data) {
      subscribeDashboard();
    }
  }, [data]);

  return (
    <El.Main>
      <Cards
        totalOrders={data?.dashboard?.totalOrders}
        totalIncome={data?.dashboard?.totalIncome}
        totalProducts={data?.dashboard?.totalProducts}
        totalUsers={data?.dashboard?.totalUsers}
        isLoading={loading}
      />
      <El.Section>
        <El.GraphWrapper>
          <Graph
            graph={{
              data: data?.dashboard?.graph?.data || [],
              labels: data?.dashboard?.graph?.labels || [],
            }}
          />
        </El.GraphWrapper>
        <SideSection
          isLoading={loading}
          lastOrders={data?.dashboard?.lastOrders || []}
          onlineUsers={data?.dashboard?.onlineUsers || []}
        />
      </El.Section>
    </El.Main>
  );
};

export default Dashboard;
