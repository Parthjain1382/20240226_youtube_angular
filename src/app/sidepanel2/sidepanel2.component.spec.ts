import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidepanel2Component } from './sidepanel2.component';

describe('Sidepanel2Component', () => {
  let component: Sidepanel2Component;
  let fixture: ComponentFixture<Sidepanel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidepanel2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sidepanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
