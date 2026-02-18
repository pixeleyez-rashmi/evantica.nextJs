import BLogListHome from "./BlogListHome";
import BlogListOfBlog from "./ListOfBlog";

export default function BlogListIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <BLogListHome />
        <BlogListOfBlog />
      </div>
    </>
  );
}
