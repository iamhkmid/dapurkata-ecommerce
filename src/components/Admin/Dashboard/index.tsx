import * as El from "./DashboardElement";

const Dashboard = () => {
  return (
    <El.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, stiffness: 1000 }}
    >
      <El.Title>Dashboard</El.Title>
      <El.Navigation>
        <El.NavItem></El.NavItem>
      </El.Navigation>
    </El.Container>
  );
};

export default Dashboard;
