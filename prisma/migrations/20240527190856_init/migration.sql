-- CreateTable
CREATE TABLE "list" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "list_pkey" PRIMARY KEY ("id")
);
