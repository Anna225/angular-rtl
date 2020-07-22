import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRowComponent } from './child-row.component';

describe('ChildRowComponent', () => {
  let component: ChildRowComponent;
  let fixture: ComponentFixture<ChildRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
