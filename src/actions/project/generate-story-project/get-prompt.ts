import { r } from "@/lib/reddit"

const getPrompt = async (formValues: any) => {

  const fromReddit = async () => {
    const submissionLink = formValues.storySettings.redditLink;
    const submissionId = submissionLink.split("/comments/")[1].split("/")[0];

    const title = r.getSubmission('2np694').title;
    const content = r.getSubmission('2np694').selftext;

    return { title, content }
  }
  

  const method = formValues.storySettings.method;

  if (method === "reddit") {
    const { title, content } = await fromReddit();
    return { title, content };
  }
}

export default getPrompt;