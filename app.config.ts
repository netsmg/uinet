export default defineAppConfig({
  ui: {
    strategy: "merge",
    primary: "emerald",
    gray: "slate",
    tooltip: {
      // removes fixed height and truncate
      base: "h-auto overflow-visible text-overflow-clip whitespace-normal",
      popper: { placement: "top" },
    },
  },
  repoUrl: "https://github.com/probetemplate",
  myWebsiteUrl: "https://webuinet.vercel.app",
  myContactUrl: "https://webuinet.vercel.app/contact",
})
