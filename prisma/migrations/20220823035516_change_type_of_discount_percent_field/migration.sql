/*
  Warnings:

  - You are about to alter the column `discountPercent` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "discountPercent" SET DEFAULT 0,
ALTER COLUMN "discountPercent" SET DATA TYPE INTEGER;
