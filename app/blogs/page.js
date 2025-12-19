"use client";

import Header from "@/components/header/Header";
import { blogs, blogCategories } from "@/lib/data/blogs";
import { useBlogFilters } from "@/hooks/useBlogFilters";
import { FeaturedBlogCard } from "@/components/blogs/FeaturedBlogCard";
import { BlogFilters } from "@/components/blogs/BlogFilters";
import { BlogCard } from "@/components/blogs/BlogCard";

export default function BlogsPage() {
  const {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    filteredBlogs,
  } = useBlogFilters();

  const featuredBlog = blogs.find((b) => b.featured);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F7F7F7]">
        <FeaturedBlogCard blog={featuredBlog} />

        <BlogFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categories={blogCategories}
          resultCount={filteredBlogs.length}
        />

        <section className="bg-[#F7F7F7]">
          <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
            {filteredBlogs.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg font-semibold text-[#232323]">
                  No articles found
                </p>
                <p className="mt-2 text-sm text-[#232323]">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
