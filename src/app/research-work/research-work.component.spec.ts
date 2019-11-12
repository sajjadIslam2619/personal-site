import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchWorkComponent } from './research-work.component';

describe('ResearchWorkComponent', () => {
  let component: ResearchWorkComponent;
  let fixture: ComponentFixture<ResearchWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
