export class Page {
  number: number;
  size: number;
  total_elements: number;
  total_pages: number;

  constructor(number: number = 0, size: number = 0, total_elements: number = 0, total_pages: number = 0) {
    this.number = number;
    this.size = size;
    this.total_elements = total_elements;
    this.total_pages = total_pages;
  }
}
