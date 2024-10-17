import { ItemList } from "@/components/item.list";
import { useProducts } from "@/useProducts";
import { Outlet, useLocation } from "react-router-dom";
import Detail from "./detail";

export default function Products() {
  const location = useLocation();
  const id = location.search.split("id=")[1];
  const { data } = useProducts();

  const items = data?.products as { id: number; name: string }[];

  return (
    <div className="flex gap-4 h-full w-full items-stretch">
      <div className="flex flex-col">
        <ItemList
          items={items}
          selected={id}
          href="/products"
          label="produit"
        />
      </div>
      <Outlet />
      {id && <Detail />}
    </div>
  );
}
