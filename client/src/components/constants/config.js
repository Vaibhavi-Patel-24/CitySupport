// API service calls
export const SERVICE_URLS = {
    // userSignup: { url: '/registration', method: 'POST' },
    // userLogin: { url: '/login', method: 'POST' },
    // contactUs: { url: '/contact', method: 'POST' },
    // donateUs: { url: '/donate', method: 'POST' },
    // adminEvent: { url: '/admin29/events', method: 'POST' },
    // adminBlog: { url: '/admin29/blogs', method: 'POST' },
    // adminNews: { url: '/admin29/news', method: 'POST' },
    // getEvents: { url: '/admin29/events', method: 'GET' },
    // getBlogs: { url: '/admin29/blogs', method: 'GET' },
    // deleteEvent: { url: '/admin29/events/:id', method: 'DELETE' },
    // deleteBlog: { url: '/admin29/blogs/:id', method: 'DELETE' },
    // getNews: { url: '/admin29/news', method: 'GET' },
    // getUsers: { url: '/admin29/users', method: 'GET' },
    // deleteNews: { url: '/admin29/news/:id', method: 'DELETE' },
    adminLogin: { url: '/admin123/login', method: 'POST' },
    // newsLetter: { url: '/', method: 'POST' },
    // tempAplication: { url: '/about', method: 'POST' },
  };
  
  // API_NOTIFICATION_MESSAGES
  export const API_NOTIFICATION_MESSAGES = {
    loading: {
      title: 'Loading...',
      message: 'Data is being loaded, please wait...',
    },
    success: {
      title: 'Success',
      message: 'Data loaded successfully',
    },
    responseFailure: {
      title: 'Error',
      message: 'An error occurred while fetching response from the server. Please try again.',
    },
    requestFailure: {
      title: 'Error',
      message: 'An error occurred while parsing request data.',
    },
    networkError: {
      title: 'Error',
      message: 'Unable to connect to the server. Please check your network and try again later.',
    },
  };
  