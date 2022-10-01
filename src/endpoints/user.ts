import axios from '../services/api';
import { IUser } from '../interfaces/user.interface';

export function fetchUsers() {
  return axios.get<IUser>('/users');
}

export function fetchSingleUser() {
  return axios.get<IUser>('/users/:id');
}

export function deleteUser() {
  return axios.delete<IUser>('/users/:id');
}

export function addUser() {
  return axios.post<IUser>('/users');
}

export function updateUser() {
  return axios.put<IUser>('/users/:id');
}
