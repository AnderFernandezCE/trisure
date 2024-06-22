import { Header } from "./components/common/Header"
import { ViewFilters } from "./components/entity-filters/ViewFilters"
import { ViewTransactions } from "./components/transactions/ViewTransactions"

export const Transactions = () => {
  return (
    <>
      <div>
        <Header />
        <ViewFilters/>
        <ViewTransactions />
      </div>
    </>
  )
}