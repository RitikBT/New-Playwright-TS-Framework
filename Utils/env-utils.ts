import dotenv from "dotenv";

export function initializeEnv(): void {
  const testEnv = process.env.TESTENV
    ? process.env.TESTENV.toLowerCase()
    : "qa";
  dotenv.config({
    override: true,
    path: "environment/.env.common",
  });
  dotenv.config({
    override: true,
    path: ".env.local",
  });
  dotenv.config({
    override: true,
    path: `environment/.env.${testEnv}`,
  });
}
