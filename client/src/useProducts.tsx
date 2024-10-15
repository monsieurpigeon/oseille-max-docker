import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  const { getToken } = useAuth();

  const query = useQuery({
    queryKey: ["products"],
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
