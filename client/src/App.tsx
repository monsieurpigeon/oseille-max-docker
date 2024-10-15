import { Badge } from "@/components/ui/badge";
import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  useOrganization,
  UserButton,
} from "@clerk/clerk-react";
import { useProducts } from "./useProducts";

function App() {
  const { organization } = useOrganization();

  const { data } = useProducts();

  const products = data?.products as { id: string; name: string }[];

  return (
    <div className="w-screen h-dvh">
      <main className="w-full h-full box-border border-8 border-yellow-200 flex flex-col">
        <div id="header">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
            <OrganizationSwitcher />
          </SignedIn>
        </div>

        <div>{organization?.name}</div>
        <div className="flex flex-col">
          <ul>
            {products &&
              products.map((product) => (
                <li key={product.id}>
                  <Badge>{product.name}</Badge>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
