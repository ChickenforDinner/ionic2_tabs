import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PAGE_SIZE } from '../../providers/Constants';

/**
 * @name 自定义分页组件
 * @description
 * @example <page-paging [total]="18" (pageNumChange)="doSearch($event)"></page-paging>
 * @example <page-paging [total]="total" (pageNumChange)="doSearch($event)" pageSize="10" color="dark"></page-paging>
 */
@IonicPage()
@Component({
  selector: 'page-paging',
  templateUrl: 'paging.html',
})
export class PagingPage {

  @Input()
  total: number; // 共多少条数据

  @Input()
  pageSize: number = PAGE_SIZE; // 每页大小,默认5条

  @Input()
  color = 'primary'; // 主题颜色

  @Input() pageNum = 1; // 当前第几页,默认1
  @Output() pageNumChange = new EventEmitter<any>();

  btnClick(pageNum) {
    this.pageNum = pageNum;
    this.pageNumChange.emit(pageNum);
  }

  ceil(num) {
    return Math.ceil(num);
  }

}
