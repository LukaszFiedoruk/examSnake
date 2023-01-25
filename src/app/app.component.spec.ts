import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an error message when the player name is not entered', () => {
    spyOn(window, 'alert');
    component.playerEmail = 'test@example.com';
    component.startGame();
    expect(window.alert).toHaveBeenCalledWith('Please enter a valid name and email');
  });

  it('should show an error message when the player email is not entered', () => {
    spyOn(window, 'alert');
    component.playerName = 'Test Player';
    component.startGame();
    expect(window.alert).toHaveBeenCalledWith('Please enter a valid name and email');
  });

  it('should not show an error message when the player name and email are entered', () => {
    spyOn(window, 'alert');
    component.playerName = 'Test Player';
    component.playerEmail = 'test@example.com';
    component.startGame();
    expect(window.alert).not.toHaveBeenCalled();
  });
});