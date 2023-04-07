import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceListComponent } from './inheritance-list.component';

describe('InheritanceListComponent', () => {
  let component: InheritanceListComponent;
  let fixture: ComponentFixture<InheritanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InheritanceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
