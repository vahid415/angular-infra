import {PagingFilter} from "./filter.dto";
import {McbGridSort} from "./sort.dto";

export class PagingRequest {
  start: number;
  size: number;
  filters = new Array<PagingFilter>();
  sort: McbGridSort;

  constructor(start?: number, size?: number, filters?: PagingFilter[], sort?: McbGridSort) {
    this.start = start;
    this.size = size;
    this.filters = filters ? filters : new Array<PagingFilter>();
    this.sort = sort;
  }
}
