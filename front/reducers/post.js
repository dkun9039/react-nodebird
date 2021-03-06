export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const COMMENT_POST_REQUEST = 'COMMENT_POST_REQUEST';
export const COMMENT_POST_SUCCESS = 'COMMENT_POST_SUCCESS';
export const COMMENT_POST_FAILURE = 'COMMENT_POST_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

const initialState = {
  mainPosts: [],
  isAddingPost: false,
  addPostError: null,
  imagePaths: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
        isAddingPost: true,
        addPostError: null,
      }
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
        isAddingPost: false,
        addPostError: null,
      }
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        isAddingPost: false,
        addPostError: action.error,
      }
    }
    case LOAD_MAIN_POSTS_REQUEST: {
      return {
        ...state,
      }
    }
    case LOAD_MAIN_POSTS_SUCCESS: {
      return {
        ...state,
        mainPosts: action.data,
      }
    }
    case LOAD_MAIN_POSTS_FAILURE: {
      return {
        ...state,
      }
    }
    case UPLOAD_IMAGES_REQUEST: {
      return {
        ...state,
      }
    }
    case UPLOAD_IMAGES_SUCCESS: {
      return {
        ...state,
        imagePaths: [...state.imagePaths, ...action.data],
      }
    }
    case UPLOAD_IMAGES_FAILURE: {
      return {
        ...state,
      }
    }
    case REMOVE_IMAGE: {
      const imagePaths = state.imagePaths.slice();
      imagePaths.splice(action.index, 1);
      return {
        ...state,
        imagePaths,
      };
    }
    default:
      return {
        ...state,
      }
  }
};
