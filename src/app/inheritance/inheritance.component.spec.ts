import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceComponent } from './inheritance.component';

describe('InheritanceComponent', () => {
  let component: InheritanceComponent;
  let fixture: ComponentFixture<InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InheritanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
