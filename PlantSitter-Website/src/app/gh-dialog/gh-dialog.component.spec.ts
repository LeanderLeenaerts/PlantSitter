import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhDialogComponent } from './gh-dialog.component';

describe('GhDialogComponent', () => {
  let component: GhDialogComponent;
  let fixture: ComponentFixture<GhDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
