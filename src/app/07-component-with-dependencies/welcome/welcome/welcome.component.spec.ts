import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

import { WelcomeComponent } from './welcome.component';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User' };
}

describe('WelcomeComponent', () => {
  let comp: WelcomeComponent;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      //providers: [WelcomeComponent, UserService]
      providers: [WelcomeComponent, { provide: UserService, useClass: MockUserService }]
    });
    
    // inject both the component and the dependent service.
    comp = TestBed.inject(WelcomeComponent);
    userService = TestBed.inject(UserService);
  });

  xit('should not have welcome message after construction', () => {
    expect(comp.welcome).toBeUndefined();
  });

  xit('should welcome logged in user after Angular calls ngOnInit', () => {
    comp.ngOnInit();
    expect(comp.welcome).toContain(userService.user.name);
  });

  xit('should ask user to log in if not logged in after ngOnInit', () => {
    userService.isLoggedIn = false;

    comp.ngOnInit();
    
    expect(comp.welcome).not.toContain(userService.user.name);
    expect(comp.welcome).toContain('log in');
  });
});
