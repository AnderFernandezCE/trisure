import { Typography } from "@/typography/Typography"
import { FIlterButton } from "./FilterButton"
import { Container } from "../common/Container"

export const ViewFilters = () => {
  return (
    <Container>
      <div className="flex flex-col py-6">
        <Typography as="h1">Welcome Back, Ander</Typography>
        <Typography as="p">This text will depend on router</Typography>
        <div className="flex flex-row space-x-4 mt-4">
        <FIlterButton/>
        <FIlterButton/>
        </div>
      </div>
    </Container>
  )
}