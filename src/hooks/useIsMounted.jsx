import * as React from "react";
import { useEffect, useState } from "react";

const useIsMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

export default useIsMounted;
