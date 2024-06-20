"use server";

import { r } from "@/lib/reddit";

const getScriptfromReddit = async (
  submissionLink: string
) => {
  const submissionId = submissionLink.split("/comments/")[1].split("/")[0];

  const title = await r.getSubmission(submissionId).title;
  const content = await r.getSubmission(submissionId).selftext;

  return { title, content };
}

export default getScriptfromReddit;