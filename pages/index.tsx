import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function IndexRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/ca'); // or your preferred default locale
  }, [router]);
  return null;
} 