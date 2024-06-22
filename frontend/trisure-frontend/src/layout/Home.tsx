import FilterPicker from "./components/FilterPicker"
import { Header } from "./components/common/Header"
import { ViewFilters } from "./components/entity-filters/ViewFilters"

export const Home = () => {
  return (
    <>
      <div>
        <Header />
        <ViewFilters></ViewFilters>
      {/* <FilterPicker className=""/>   */}
      </div>
    </>
  )
}