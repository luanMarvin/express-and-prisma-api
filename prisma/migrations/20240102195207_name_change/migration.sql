/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `USER` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vote` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_postId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "USER";

-- DropTable
DROP TABLE "Vote";

-- CreateTable
CREATE TABLE "USERS" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "USERS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "POSTS" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dislikes" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "POSTS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VOTES" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "VOTES_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VOTES_userId_postId_key" ON "VOTES"("userId", "postId");

-- AddForeignKey
ALTER TABLE "POSTS" ADD CONSTRAINT "POSTS_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VOTES" ADD CONSTRAINT "VOTES_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USERS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VOTES" ADD CONSTRAINT "VOTES_postId_fkey" FOREIGN KEY ("postId") REFERENCES "POSTS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
