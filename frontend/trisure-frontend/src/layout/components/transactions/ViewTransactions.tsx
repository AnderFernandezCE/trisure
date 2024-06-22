
import { ColumnDef } from "@tanstack/react-table"
import { Container } from "../common/Container"
import { DataTable } from "../data-table/DataTable"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "724ad22f",
    amount: 200,
    status: "failed",
    email: "k@example.com",
  },
]

export const ViewTransactions = () => {
  return (
    <Container>
      <DataTable columns={columns} data={data} />
    </Container>

  )
}