/** Image configuration values */
export const IMAGES = {
  DEFAULT_POST_WIDTH: 400,
  DEFAULT_POST_HEIGHT: 200,
  DEFAULT_AVATAR_SIZE: 25,
  DEFAULT_QUALITY: 85,
  PLACEHOLDER: '/placeholder-image.jpg',
} as const;

/** Grid layout configuration */
export const GRID = {
  POSTS_PER_PAGE: 6,
  MOBILE_COLUMNS: 1,
  DESKTOP_COLUMNS: 3,
} as const;

/** Application status messages */
export const STATUS = {
  LOADING: "Loading posts...",
} as const;

/** Application message strings */
export const MESSAGES = {
  ERROR: {
    FETCH_POSTS: 'Failed to load posts. Please try again later.',
    DEFAULT: 'An error occurred while displaying this content.',
  },
  EMPTY: {
    POSTS: 'No posts available at the moment.',
  },
} as const;