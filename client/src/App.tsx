import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    fetch("https://rocinanteqfp7qmyc-server.functions.fnc.fr-par.scw.cloud/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  });

  return (
    <div className="w-screen h-dvh">
      <main className="bg-primary w-full h-full box-border border-8 border-yellow-200 flex items-center justify-center">
        <div className="flex flex-col">
          <Badge>{message}</Badge>
          <Button variant="secondary">Drink me</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
