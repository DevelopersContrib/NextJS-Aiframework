import HeaderWidget from "@/components/HeaderWidget";

import { getData, getDomain, getScript } from "@/lib/data";
import BlogList from "@/modules/blog/BlogList";

const page = async () => {
  const c = await getData();
  const domain = getDomain();

  return (
    <>
      <HeaderWidget
        domain={domain}
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
      <BlogList />
    </>
  );
};

export default page;
