// API service calls
export const SERVICE_URLS = {

    contactUs: { url: '/contact', method: 'POST' },
    getQueries: { url: '/queries', method: 'GET' },
    adminLogin: { url: '/admin123/login', method: 'POST' },
    deleteQuery: { url: "/queries/:id", method: "DELETE" }, // Add this
    getFAQs: { url: '/faqs', method: 'GET' }, 
    addFAQ: { url: '/faqs', method: 'POST' }, 
    updateFAQ: { url: '/faqs/:id', method: 'PUT' }, 
    deleteFAQ: { url: '/faqs/:id', method: 'DELETE' },
    newSubscriber: { url: '/subscriber', method: 'POST' },
    getSubscribers: { url: '/subscribers', method: 'GET' },
    deleteSubscriber:{url: '/subscribers/:id', method:'DELETE'},
    mustVisit: { url: '/mustvisit', method: 'POST' },
    deleteMustVisit: { url: '/mustvisit/:id', method: 'DELETE' },
    getMustVisit: { url: '/mustvisit/:id', method: 'GET' },
    blog: { url: '/social', method: 'POST' },
    deleteBlog: { url: '/social/:id', method: 'DELETE' },
    getBlog: { url: '/social/:id', method: 'GET' },

    uploadBanner: { url: '/banner', method: 'POST' },
    deleteBanner: { url: '/banner/:id', method: 'DELETE' },
    getBanner: { url: '/banner/:id', method: 'GET' },
    uploadHomeBusinesses: { url: '/homelocalbussiness', method: 'POST' },
    getHomeBusinesses: { url: '/homelocalbussiness/:id', method: 'GET' },
    deleteHomeBusinesses: { url: '/homelocalbussiness/:id', method: 'DELETE' },
    updateHomeBussiness: { url: '/faqs/:id', method: 'PUT' }, 

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
  