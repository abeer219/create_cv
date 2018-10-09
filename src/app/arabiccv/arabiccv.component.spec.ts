import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabiccvComponent } from './arabiccv.component';

describe('ArabiccvComponent', () => {
  let component: ArabiccvComponent;
  let fixture: ComponentFixture<ArabiccvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabiccvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabiccvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
