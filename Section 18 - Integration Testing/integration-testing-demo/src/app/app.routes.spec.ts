import {routes} from './app.routes';
import { UsersComponent } from './users/users.component';


//Task 2 - Write a Test to make sure the Route Exists:
describe('routes', () => {
    it('should contain a route for /users', () => {
        expect(routes).toContain({path: 'users', component: UsersComponent})
    });
})