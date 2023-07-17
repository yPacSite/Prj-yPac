import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareThisComponent } from './share-this.component';

describe('ShareThisComponent', () => {
  let component: ShareThisComponent;
  let fixture: ComponentFixture<ShareThisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareThisComponent]
    });
    fixture = TestBed.createComponent(ShareThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
