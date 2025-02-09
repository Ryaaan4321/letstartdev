-- AddForeignKey
ALTER TABLE "postgres"."Todo" ADD CONSTRAINT "Todo_userid_fkey" FOREIGN KEY ("userid") REFERENCES "postgres"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
