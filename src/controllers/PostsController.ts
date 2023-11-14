import axios, { AxiosResponse } from 'axios';

export class PostsController {

    async getAllPosts(): Promise<AxiosResponse<string[]>> {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }

    async getPost( id: any ): Promise<AxiosResponse<string[]>> {
        return axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }
}
