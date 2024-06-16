import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDataPlotterComponent } from './person-data-plotter.component';

describe('PersonDataPlotterComponent', () => {
  let component: PersonDataPlotterComponent;
  let fixture: ComponentFixture<PersonDataPlotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDataPlotterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDataPlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
