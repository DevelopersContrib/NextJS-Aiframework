import HeaderWidget from "@/components/HeaderWidget";
import BlogSlugPage from "@/modules/blog/slug";
import { getData, getDomain } from "@/lib/data";
const BlogPost = async ({ params }) => {
  const [id, slug] = params.params;
  const domain = getDomain();
  const c = await getData();

  return (
    <>
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <div className="tw-min-h-screen tw-pt-5 tw-pb-5 tw-mt-20 tw-mb-20">
        <BlogSlugPage id={id} />
      </div>
    </>
  );
};

export default BlogPost;
