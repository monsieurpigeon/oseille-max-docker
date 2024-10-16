import { useProducts } from "@/useProducts";
import { useOrganization } from "@clerk/clerk-react";

export default function Products() {
  const { organization } = useOrganization();

  const { data } = useProducts();

  const products = data?.products as { id: string; name: string }[];

  return (
    <div className="w-screen h-dvh">
      <main className="w-full h-full box-border border-8 border-yellow-200 flex flex-col">
        <div>{organization?.name}</div>
        <div className="flex flex-col bg-secondary grow p-4">
          <ul className="flex gap-2 p-4 border rounded bg-card shadow-inner">
            {products &&
              products.map((product) => (
                <li key={product.id}>
                  <div className="px-4 py-2 border rounded shadow">
                    {product.name}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
