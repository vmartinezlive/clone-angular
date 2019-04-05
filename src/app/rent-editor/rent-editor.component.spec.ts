import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentEditorComponent } from './rent-editor.component';

describe('RentEditorComponent', () => {
  let component: RentEditorComponent;
  let fixture: ComponentFixture<RentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
