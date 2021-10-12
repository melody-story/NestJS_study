-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "director" TEXT NOT NULL,
    "movieName" TEXT NOT NULL,
    "yearReleased" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "genres" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
