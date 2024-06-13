import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropPassportComponent } from './drag-drop-passport.component';

describe('DragDropPassportComponent', () => {
  let component: DragDropPassportComponent;
  let fixture: ComponentFixture<DragDropPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropPassportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
