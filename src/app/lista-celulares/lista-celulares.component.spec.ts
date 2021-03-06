import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCelularesComponent } from './lista-celulares.component';

describe('ListaCelularesComponent', () => {
  let component: ListaCelularesComponent;
  let fixture: ComponentFixture<ListaCelularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCelularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
