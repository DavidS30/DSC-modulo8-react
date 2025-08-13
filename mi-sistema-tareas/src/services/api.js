import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const getAuthHeaders = () => {
    const token = localStorage.getItem("access_token");
    return token ? { 'Authorization': `Bearer ${token}` } : {}
}


const handleError = (error) => {
    const errorMessage = error.response.data.detail || error.response.data.error ||
                         error.message || "Ha ocurrido un error en el consumo de la API";
    throw new Error(errorMessage);
}

// class interceptor
class ApiClient {
    constructor(baseURL){
        this.baseURL = baseURL;
        this.isRefreshing = false;
        this.failedQueue = [];

        this.instance = axios.create({
            baseURL: this.baseURL,
            headers: { 'Content-Type': 'application/json' }
        })

        this.instance.interceptors.request.use((config) => {
            const authHeaders = getAuthHeaders();
            config.headers = { ...config.headers, ...authHeaders };
            return config;
        },
        (error) => Promise.reject(error));

        this.instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;

                if (error.response.status === 401 && !originalRequest._retry){
                   if (this.isRefreshing){
                       return new Promise( (resolve, reject) => {
                           this.failedQueue.push({ resolve, reject });
                       }).then(() => {
                           return this.instance(originalRequest);
                       }).catch((error) => {
                           return Promise.reject(error);
                       })
                   }

                   originalRequest._retry = true;
                   this.isRefreshing = true;
                   try{
                       const refreshToken = localStorage.getItem("refresh_token");

                       if (!refreshToken) {
                           authAPI.logout();
                           throw new Error("Sesión expirada. Por favor, inicia sesión nuevamente.");
                       }

                       const response = await axios.post(`${this.baseURL}/token/refresh`, {
                           refresh: refreshToken
                       })
                       const {access} = response.data;
                       localStorage.setItem("access_token", access);
                       this.processQueue(null, access);

                       return this.instance(originalRequest);
                   }catch(error){
                       this.processQueue(error, null);
                       authAPI.logout();
                       return Promise.reject(new Error("Sesión expirada. Por favor, inicia sesión nuevamente."));
                   } finally{
                     this.isRefreshing = false;
                   }
                }
            }
        )
    }

    processQueue(error=null, token=null){
        this.failedQueue.forEach( ({resolve, reject}) => {
            if (error){
                reject(error);
            }else{
                resolve(token);
            }
        });

        this.failedQueue = [];
    }

    async get(url, config = {}){
        try{
            const response = await this.instance.get(url, config);
            return response.data;
        }catch(error){
            handleError(error);
        }
    }

    async post(url, data = {}, config = {}){
        try{
            const response = await this.instance.post(url,data,config);
            return response.data;
        }catch(error){
            handleError(error);
        }
    }

    async put(url, data = {}, config = {}){
        try{
            const response = await this.instance.put(url,data,config);
            return response.data;
        }catch(error){
            handleError(error);
        }
    }

    async delete(url, config = {}){
        try{
            const response = await this.instance.delete(url,config);
            return response.data;
        }catch(error){
            handleError(error);
        }
    }
}

const apiClient = new ApiClient(API_URL);

// Authentication service
export const authAPI = {
    login: async (email, password) => {
        try{
            const response = await axios.post(`${API_URL}/auth/login`,
                {
                    email,
                    password
            })

            if(response.data.tokens.access){
                localStorage.setItem("access_token", response.data.tokens.access)
            }
            if(response.data.tokens.refresh){
                localStorage.setItem("refresh_token", response.data.tokens.refresh)
            }
        return response.data;
        }catch(error){
            handleError(error)
        }
    },

    register: async (userData) => {
        try{
            const response = await axios.post(`${API_URL}/auth/register`,userData)

            if(response.data.tokens.access){
                localStorage.setItem("access_token", response.data.tokens.access)
            }
            if(response.data.tokens.refresh){
                localStorage.setItem("refresh_token", response.data.tokens.refresh);
            }
            return response.data;
        }catch(error){
            handleError(error)
        }
    },

    logout: () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }
}

export const taskAPI = {
    getTasks: async () => {
       return apiClient.get('/tasks/');
    },

    createTask: async (taskData) => {
        return apiClient.post('/tasks', taskData);
    },

    updateTask: async (taskId, taskData) => {
       return apiClient.put(`/tasks/${taskId}/`, taskData)
    },

    deleteTask: async (taskId) => {
        return apiClient.delete(`/tasks/${taskId}/`);
    }
}