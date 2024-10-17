import { useAuth, useOrganization } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const { getToken } = useAuth();
  const { organization } = useOrganization();

  const query = useQuery({
    queryKey: ["products", organization?.id],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/product`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (!res.ok) {
        throw new Error("Erreur réseau");
      }

      return res.json();
    },
  });

  return query;
}

export function useProduct({ id }: { id: string }) {
  const { getToken } = useAuth();
  const { organization } = useOrganization();

  const query = useQuery({
    queryKey: ["product", id, organization?.id],
    queryFn: async () => {
      if (!id) {
        return;
      }
      const res = await fetch(`${import.meta.env.VITE_API_URL}/product/${id}`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (!res.ok) {
        throw new Error("Erreur réseau");
      }

      return res.json();
    },
  });

  return query;
}
