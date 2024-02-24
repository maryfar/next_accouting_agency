

import { getAllUsers } from "@/pocketbase/users";
import { UsersList } from "@/components/lists/users-list";
import { redirect } from "next/navigation";
import { CompanyList } from "@/components/lists/company-list";
import { getAllCompanies } from "@/pocketbase/companies";

export const dynamic = "force-dynamic";

export default async function UserPanel() {
  let companies: PocketbaseResponse<ICompany>;
  try {
    companies = await getAllCompanies(1);
  } catch (error) {
    redirect("/login");
  }

  return (
    <main className="container mx-auto py-xl">
      <CompanyList Company={companies?.items || []} />
    </main>
  );
}
