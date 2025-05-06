import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schemaFilter: ['public'],
    schema: './app/features/**/schema.ts',
    out: './app/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
});
