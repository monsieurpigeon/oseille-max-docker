import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<{ name: string; id: string }[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/product`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  });

  return (
    <div className="w-screen h-dvh">
      <main className="bg-primary w-full h-full box-border border-8 border-yellow-200 flex items-center justify-center">
        <div className="flex flex-col">
          <ul>
            {products.map((product) => (
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
