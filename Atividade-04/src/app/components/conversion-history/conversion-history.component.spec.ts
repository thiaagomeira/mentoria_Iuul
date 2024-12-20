import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionHistoryService } from './conversion-history.component';

describe('ConversionHistoryComponent', () => {
  let component: ConversionHistoryService;
  let fixture: ComponentFixture<ConversionHistoryService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionHistoryService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionHistoryService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
