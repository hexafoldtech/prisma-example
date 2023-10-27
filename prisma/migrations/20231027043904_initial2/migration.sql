/*
  Warnings:

  - You are about to drop the `ModelPSQL2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ModelPSQL2";

-- CreateTable
CREATE TABLE "ModelPSQL1" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,

    CONSTRAINT "ModelPSQL1_pkey" PRIMARY KEY ("id")
);
