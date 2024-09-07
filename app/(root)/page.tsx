import HeaderBox from "@/components/ui/HeaderBox";
import RIghtSideBar from "@/components/ui/RIghtSideBar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Aksh",
    lastName: "Vashishta",
    email: "contact@aksh.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Transactions
      </div>
      <RIghtSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 123.5 }]}
      />
    </section>
  );
};

export default Home;
