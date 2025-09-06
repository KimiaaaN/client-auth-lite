// lib/validators.ts
export function isValidIranianPhone(phone: string): boolean {
  const patterns = [
    /^09\d{9}$/,      // 09xxxxxxxxx
    /^\+989\d{9}$/,   // +989xxxxxxxxx
    /^00989\d{9}$/    // 00989xxxxxxxxx
  ];
  return patterns.some((p) => p.test(phone));
}

export interface User {
  name: string;
  email: string;
  picture: string;
}
