import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDataComponent } from './hero-data.component';

describe('HeroDataComponent', () => {
  let component: HeroDataComponent;
  let fixture: ComponentFixture<HeroDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
