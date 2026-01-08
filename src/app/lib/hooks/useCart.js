'use client';

import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false); // ✅ session ready flag

  const { data: session, status } = useSession();
  const email = session?.user?.email;

  // 🔹 fetchCart function
  useEffect(() => {
    const fetchCart = async () => {
      if (!email) return;
      setLoading(true);
      const res = await fetch(`/api/cart?email=${email}`, {
        cache: 'no-store',
      });

      if (!res.ok) throw new Error("Failed to fetch cart");

      const data = await res.json();
      setCart(data);
      setLoading(false);

    };
    fetchCart();

  }, [email])



  return { cart, loading, setCart };
};

export default useCart;
