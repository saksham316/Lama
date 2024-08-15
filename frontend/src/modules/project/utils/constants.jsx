import { GoCopy, GoDiamond, GoPencil } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import rssFeedImg from "/images/icons/rssFeed.jpg";
import youtubeImg from "/images/icons/youtube.jpg";
import uploadFileImg from "/images/icons/uploadFile.jpg";

export const iconSize = 30;

export const PROJECT_SIDEBAR_OPTIONS = [
  {
    name: "Add your Podcast(s)",
    icon: <FaPlus size={20} />,
  },
  {
    name: "Create & Repurpose",
    icon: <GoPencil size={20} />,
  },
  {
    name: "Podcast Widget",
    icon: <GoCopy size={20} />,
  },
  {
    name: "Upgrade",
    icon: <GoDiamond size={20} />,
  },
];

export const ADD_PODCAST_OPTIONS = [
  {
    title: "RSS Feed",
    description: "ldsadl sjadklorem loresandn",
    logo: rssFeedImg,
  },
  {
    title: "Youtube Video",
    description: "ldsadl sjadklorem loresandn",
    logo: youtubeImg,
  },
  {
    title: "Upload Files",
    description: "ldsadl sjadklorem loresandn",
    logo: uploadFileImg,
  },
];
