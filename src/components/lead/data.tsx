const lead_sources = [
  {
    name: "@Levelsio's last 20 posts",
    count: 4_522,
    status: "running",
    targets: ["likers", "retweets", "comments"],
  },
  {
    name: "#buildinpublic last 10 posts",
    count: 1_525,
    status: "ready",
    targets: ["likers", "retweets", "comments", "more than 2K followers"],
  },
  {
    name: "@Mark_lou",
    count: 1_525,
    status: "ready",
    targets: ["last 2000 followers", "more than 200 followers"],
  },
];

export type LeadSource = (typeof lead_sources)[0];

export default lead_sources;
