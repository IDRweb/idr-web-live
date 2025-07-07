export function slugCompute(slug: string) {
  const slugArr = slug.split('-');
  slugArr.splice(0, 3);
  return slugArr.join('-');
}