CREATE TYPE "public"."job_type" AS ENUM('full-time', 'part-time', 'freelance', 'internship');--> statement-breakpoint
CREATE TYPE "public"."location" AS ENUM('remote', 'in-person', 'hybrid');--> statement-breakpoint
CREATE TYPE "public"."salary_range" AS ENUM('$0 - $50,000', '$50,000 - $70,000', '$70,000 - $100,000', '$100,000 - $120,000', '$120,000 - $150,000', '$150,000 - $250,000', '$250,000+');--> statement-breakpoint
CREATE TABLE "gpt_ideas" (
	"gpt_idea_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "gpt_ideas_gpt_idea_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"idea" text NOT NULL,
	"views" integer DEFAULT 0 NOT NULL,
	"claimed_at" timestamp,
	"claimed_by" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "gpt_ideas_likes" (
	"gpt_idea_id" bigint,
	"profile_id" uuid,
	CONSTRAINT "gpt_ideas_likes_gpt_idea_id_profile_id_pk" PRIMARY KEY("gpt_idea_id","profile_id")
);
--> statement-breakpoint
CREATE TABLE "jobs" (
	"job_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "jobs_job_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"position" text NOT NULL,
	"overview" text NOT NULL,
	"responsibilities" text NOT NULL,
	"qualifications" text NOT NULL,
	"benefits" text NOT NULL,
	"skills" text NOT NULL,
	"company_name" text NOT NULL,
	"company_logo" text NOT NULL,
	"company_location" text NOT NULL,
	"apply_url" text NOT NULL,
	"job_type" "job_type" NOT NULL,
	"location" "location" NOT NULL,
	"salary_range" "salary_range" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"category_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "categories_category_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_upvotes" (
	"product_id" bigint,
	"profile_id" uuid,
	CONSTRAINT "product_upvotes_product_id_profile_id_pk" PRIMARY KEY("product_id","profile_id")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"product_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "products_product_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"tagline" text NOT NULL,
	"description" text NOT NULL,
	"how_it_works" text NOT NULL,
	"icon" text NOT NULL,
	"url" text NOT NULL,
	"stats" jsonb DEFAULT '{"views":0,"reviews":0}'::jsonb NOT NULL,
	"profile_id" uuid NOT NULL,
	"category_id" bigint,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"review_id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "reviews_review_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"product_id" bigint,
	"profile_id" uuid,
	"rating" integer NOT NULL,
	"review" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "rating_check" CHECK ("reviews"."rating" BETWEEN 1 AND 5)
);
--> statement-breakpoint
CREATE TABLE "follows" (
	"follower_id" uuid,
	"following_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"profile_id" uuid PRIMARY KEY NOT NULL,
	"avatar" text,
	"name" text NOT NULL,
	"username" text NOT NULL,
	"headline" text,
	"bio" text,
	"role" "role" DEFAULT 'developer' NOT NULL,
	"stats" jsonb,
	"views" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "gpt_ideas" ADD CONSTRAINT "gpt_ideas_claimed_by_profiles_profile_id_fk" FOREIGN KEY ("claimed_by") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gpt_ideas_likes" ADD CONSTRAINT "gpt_ideas_likes_gpt_idea_id_gpt_ideas_gpt_idea_id_fk" FOREIGN KEY ("gpt_idea_id") REFERENCES "public"."gpt_ideas"("gpt_idea_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gpt_ideas_likes" ADD CONSTRAINT "gpt_ideas_likes_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_upvotes" ADD CONSTRAINT "product_upvotes_product_id_products_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("product_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_upvotes" ADD CONSTRAINT "product_upvotes_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_categories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("category_id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_id_products_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("product_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_profile_id_profiles_profile_id_fk" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "follows" ADD CONSTRAINT "follows_follower_id_profiles_profile_id_fk" FOREIGN KEY ("follower_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "follows" ADD CONSTRAINT "follows_following_id_profiles_profile_id_fk" FOREIGN KEY ("following_id") REFERENCES "public"."profiles"("profile_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profile_id_users_id_fk" FOREIGN KEY ("profile_id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;