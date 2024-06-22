import { Container } from "../common/Container"
import { SummaryCard } from "./SummaryCard"

export const ViewSummary = () => {
  return (

    <Container>
      <div className="flex flex-row w-full justify-between space-x-10">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
    </Container>
  )
}