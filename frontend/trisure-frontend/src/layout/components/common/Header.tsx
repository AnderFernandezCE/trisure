import { ModeToggle } from "@/shadcnComponents/ModeToggle"
import { Separator } from "@/shadcnComponents/ui/separator"

export const Header = () => {
  return (
    <>
      <header className="flex flex-row justify-between items-center px-8 py-4">
        <div>IMAGE</div>
        <ul className="flex flex-row justify-between w-[400px]">
          <li>Home</li>
          <li>Transactions</li>
          <li>Accounts</li>
          <li>Categories</li>
        </ul>
        <ModeToggle></ModeToggle>
      </header>
      <Separator />
    </>
  )
}