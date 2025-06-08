import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendSkillsComponent } from './frontend-skills.component';

describe('FrontendSkillsComponent', () => {
  let component: FrontendSkillsComponent;
  let fixture: ComponentFixture<FrontendSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
