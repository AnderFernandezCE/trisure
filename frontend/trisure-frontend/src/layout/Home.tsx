import FilterPicker from "./components/FilterPicker"
import { Header } from "./components/common/Header"
import { ViewFilters } from "./components/entity-filters/ViewFilters"
import { ViewSummary } from "./components/summary/ViewSummary"

export const Home = () => {
  return (
    <>
      <div>
        <Header />
        <ViewFilters/>
        <ViewSummary/>
      {/* <FilterPicker className=""/>   */}
      </div>
    </>
  )
}