export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "608297336f0f83d8bf345ffa",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6c1jsds7",
                  apiId: "8775ac94-1d41-4940-a202-aa8a1b0ff641",
                },
                {
                  buildHookId: "608297343695aecfec50f25f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ib5ns9is",
                  apiId: "2006b6e0-27ee-4d87-9d54-207dc137cd96",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ghazanfarSystems/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ib5ns9is.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
