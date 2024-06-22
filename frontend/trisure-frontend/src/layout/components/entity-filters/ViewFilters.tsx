import { Typography } from "@/typography/Typography"
import { FIlterButton } from "./FilterButton"

export const ViewFilters = () => {
  return (
    <>
      <div className="flex flex-col px-8 py-6 mt-8">
        <Typography as="h1">Welcome Back, Ander</Typography>
        <Typography as="p">This text will depend on router</Typography>
        <FIlterButton></FIlterButton>
      </div>
    </>
  )
}