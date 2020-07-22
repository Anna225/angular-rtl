import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamapComponent } from './datamap.component';

describe('DatamapComponent', () => {
  let component: DatamapComponent;
  let fixture: ComponentFixture<DatamapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatamapComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
