import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSocialLinksComponent } from './hero-social-links.component';

describe('HeroSocialLinksComponent', () => {
  let component: HeroSocialLinksComponent;
  let fixture: ComponentFixture<HeroSocialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSocialLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
