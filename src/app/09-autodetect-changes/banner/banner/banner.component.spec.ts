import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance; // BannerComponent test instance
    h1 = fixture.nativeElement.querySelector('h1');
  });

  xit('should display original title', () => {
    // Hooray! No `fixture.detectChanges()` needed
    expect(h1.textContent).toContain(component.title);
  });

  xit('should still see original title after component.title change', () => {
    const oldTitle = component.title;
    component.title = 'Test Title';
    // Displayed title is old because Angular didn't hear the change :(
    expect(h1.textContent).toContain(oldTitle);
  });

  xit('should display updated title after detectChanges', () => {
    component.title = 'Test Title';
    fixture.detectChanges(); // detect changes explicitly
    expect(h1.textContent).toContain(component.title);
  });
});
