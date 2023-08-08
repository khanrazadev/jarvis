import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      Dashboard page(protected)
      <UserButton afterSignOutUrl="" />
    </div>
  );
}
