const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  let data;
  try {
    data = await response.json();
  } catch (e) {
    // If response is not JSON, create error object
    data = { message: `Server error: ${response.statusText}` };
  }
  
  if (!response.ok) {
    throw new Error(data.message || `HTTP error! status: ${response.status}`);
  }
  
  return data;
};

// Auth API
export const authAPI = {
  register: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('fetch')) {
        throw new Error('Cannot connect to server. Make sure backend is running on port 5000');
      }
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('fetch')) {
        throw new Error('Cannot connect to server. Make sure backend is running on port 5000');
      }
      throw error;
    }
  },

  getProfile: async () => {
    try {
      const response = await fetch(`${API_URL}/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${getAuthToken()}`
        }
      });
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('fetch')) {
        throw new Error('Cannot connect to server. Make sure backend is running on port 5000');
      }
      throw error;
    }
  }
};

// Course API
export const courseAPI = {
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams(filters);
      const response = await fetch(`${API_URL}/courses?${params}`);
      return handleResponse(response);
    } catch (error) {
      if (error.message.includes('fetch')) {
        throw new Error('Cannot connect to server. Make sure backend is running on port 5000');
      }
      throw error;
    }
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/courses/${id}`);
    return handleResponse(response);
  },

  create: async (courseData) => {
    const response = await fetch(`${API_URL}/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
      },
      body: JSON.stringify(courseData)
    });
    return handleResponse(response);
  },

  update: async (id, courseData) => {
    const response = await fetch(`${API_URL}/courses/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
      },
      body: JSON.stringify(courseData)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const response = await fetch(`${API_URL}/courses/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`
      }
    });
    return handleResponse(response);
  },

  enroll: async (id) => {
    const response = await fetch(`${API_URL}/courses/${id}/enroll`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`
      }
    });
    return handleResponse(response);
  },

  getEnrolled: async () => {
    const response = await fetch(`${API_URL}/courses/enrolled`, {
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`
      }
    });
    return handleResponse(response);
  }
};

// Auth helpers
export const auth = {
  setToken: (token) => localStorage.setItem('token', token),
  getToken: () => localStorage.getItem('token'),
  removeToken: () => localStorage.removeItem('token'),
  setUser: (user) => localStorage.setItem('user', JSON.stringify(user)),
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  removeUser: () => localStorage.removeItem('user'),
  isAuthenticated: () => !!localStorage.getItem('token'),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};
