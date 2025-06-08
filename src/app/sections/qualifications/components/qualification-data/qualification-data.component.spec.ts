import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationDataComponent } from './qualification-data.component';

describe('QualificationDataComponent', () => {
  let component: QualificationDataComponent;
  let fixture: ComponentFixture<QualificationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualificationDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
