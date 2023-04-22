import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDto } from '../dto/CategoryDto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly url = 'http://localhost:8075/categories';

  constructor(private http: HttpClient) {}

  createCategory(categoryDto: CategoryDto) {
    return this.http.post<CategoryDto>(`${this.url}/createCategory`, categoryDto);
  }

  updateCategory(categoryDto: CategoryDto) {
    return this.http.put<CategoryDto>(`${this.url}/updateCategory`, categoryDto);
  }

  deleteCategory(categoryId: number) {
    return this.http.delete(`${this.url}/deleteCategory/${categoryId}`);
  }

  getCategoryById(categoryId: number) {
    return this.http.get<CategoryDto>(`${this.url}/getCategoryById/${categoryId}`);
  }

  getAllCategories() {
    return this.http.get<CategoryDto[]>(`${this.url}/getAllCategories`);
  }

  getCategoriesByType(categoryType: string) {
    return this.http.get<CategoryDto[]>(`${this.url}/type/${categoryType}`);
  }

  searchCategoriesByName(categoryName: string) {
    return this.http.get<CategoryDto[]>(`${this.url}/search?categoryName=${categoryName}`);
  }

  assignProductToCategory(productId: number, categoryId: number) {
    return this.http.post(`${this.url}/${productId}/${categoryId}/assignProductToCategory`, null);
  }
}
