const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://banking-system-tsf-2d42.vercel.app/";
