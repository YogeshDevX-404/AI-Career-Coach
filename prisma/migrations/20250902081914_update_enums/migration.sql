/*
  Warnings:

  - The values [MEDIUM,LOW] on the enum `DemandLevel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."DemandLevel_new" AS ENUM ('High', 'Medium', 'Low');
ALTER TABLE "public"."IndustryInsight" ALTER COLUMN "demandLevel" TYPE "public"."DemandLevel_new" USING ("demandLevel"::text::"public"."DemandLevel_new");
ALTER TYPE "public"."DemandLevel" RENAME TO "DemandLevel_old";
ALTER TYPE "public"."DemandLevel_new" RENAME TO "DemandLevel";
DROP TYPE "public"."DemandLevel_old";
COMMIT;
