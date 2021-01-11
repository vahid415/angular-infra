import {PagingFilter} from "./filter.dto";
import {NgGridSort} from "./sort.dto";

export class PagingRequest {
  start: number;
  size: number;
  filters = new Array<PagingFilter>();
  sort: NgGridSort;

  constructor(start?: number, size?: number, filters?: PagingFilter[], sort?: NgGridSort) {
    this.start = start;
    this.size = size;
    this.filters = filters ? filters : new Array<PagingFilter>();
    this.sort = sort;
  }
}
