// import { PageWrapper, Explore, OngoingOrders, Performance, DueToday, NewCustomers} from "../components";
import { Page, Main, SideBar } from "./App.style";

export default function Home() {
  return (
    <Page>
      <Main>
        Dashboard
        {/* <Explore />
        <OngoingOrders />
        <NewCustomers /> */}
      </Main>
      <SideBar>
        {/* <Performance />
        <DueToday /> */}
      </SideBar>
    </Page>
  );
}
