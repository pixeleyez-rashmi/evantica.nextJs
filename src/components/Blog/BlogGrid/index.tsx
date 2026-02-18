import BlogGridHome from "./BlogGridHome";
import BlogGridOurBlog from "./BlogGridOurBlog";

export default function BlogGridIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <BlogGridHome />
        <BlogGridOurBlog />
      </div>
    </>
  );
}
