export const slugifyArticle = (title) => {
  const titleSlug = title.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')      // Replace spaces with '-'
    .replace(/[^\w\-]+/g, '')  // Remove all non-word chars
    .replace(/\-\-+/g, '-');   // Replace multiple '-' with single '-'

  return titleSlug;
}
