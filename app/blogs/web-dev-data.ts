import { BlogPost } from "./data";
import { WEB_DEV_POSTS_1 } from "./web-dev-posts-1";
import { WEB_DEV_POSTS_2 } from "./web-dev-posts-2";
import { WEB_DEV_POSTS_3 } from "./web-dev-posts-3";
import { WEB_DEV_POSTS_4 } from "./web-dev-posts-4";

export const WEB_DEV_POSTS: BlogPost[] = [
  ...WEB_DEV_POSTS_1,
  ...WEB_DEV_POSTS_2,
  ...WEB_DEV_POSTS_3,
  ...WEB_DEV_POSTS_4,
];
