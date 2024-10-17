import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Produits", href: "/products", emoji: "🥦" },
  { label: "Clients", href: "/customers", emoji: "👑" },
  { label: "Tarifs", href: "/prices", emoji: "💎" },
  { label: "Commandes", href: "/orders", emoji: "🗒️" },
  { label: "Livraisons", href: "/deliveries", emoji: "🚚" },
  { label: "Factures", href: "/invoices", emoji: "💌" },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="w-44 h-full">
      <ul className="flex flex-col rounded border shadow-md bg-card text-card-foreground">
        {NAV_ITEMS.map((item, index) => {
          return (
            <Link key={index} to={item.href}>
              <li
                className={cn(
                  "flex items-center gap-4 px-4 py-2 hover:bg-slate-100 active:bg-yellow-100",
                  location.pathname.startsWith(item.href) &&
                    "font-bold bg-sky-200/20"
                )}
              >
                <div
                  className={cn(
                    location.pathname.startsWith(item.href) &&
                      "scale-150 transition-all"
                  )}
                >
                  {item.emoji}
                </div>
                <div>{item.label}</div>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
